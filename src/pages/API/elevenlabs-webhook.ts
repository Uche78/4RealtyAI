// src/pages/api/elevenlabs-webhook.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;
const webhookSecret = import.meta.env.ELEVENLABS_WEBHOOK_SECRET; // Add this to .env

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    console.log('📞 Webhook received:', JSON.stringify(body, null, 2));

    // ElevenLabs sends different event types
    const eventType = body.type || body.event_type;
    
    // Handle conversation end event
    if (eventType === 'conversation.ended' || body.status === 'completed') {
      const conversationId = body.conversation_id;
      const transcript = body.transcript;
      const analysis = body.analysis;
      const callSid = body.call_sid;
      
      console.log('💬 Conversation ended:', conversationId);

      // Find the lead by conversation_id or call_sid
      const { data: lead, error: findError } = await supabase
        .from('leads')
        .select('*')
        .or(`conversation_id.eq.${conversationId},call_sid.eq.${callSid}`)
        .single();

      if (findError || !lead) {
        console.error('❌ Lead not found:', findError);
        return new Response(
          JSON.stringify({ success: false, error: 'Lead not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Update the lead with transcript and analysis
      const { data: updatedLead, error: updateError } = await supabase
        .from('leads')
        .update({
          call_status: 'completed',
          transcript: transcript,
          call_analysis: analysis,
          call_duration: body.duration_seconds,
          call_ended_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', lead.id)
        .select()
        .single();

      if (updateError) {
        console.error('❌ Failed to update lead:', updateError);
        return new Response(
          JSON.stringify({ success: false, error: updateError.message }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      console.log('✅ Lead updated with transcript:', updatedLead.id);

      return new Response(
        JSON.stringify({ 
          success: true, 
          leadId: updatedLead.id,
          message: 'Transcript saved successfully' 
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Handle other event types (optional)
    if (eventType === 'conversation.started') {
      console.log('📞 Call started:', body.conversation_id);
      
      // Optionally update call status
      const { error } = await supabase
        .from('leads')
        .update({ 
          call_status: 'in_progress',
          call_started_at: new Date().toISOString()
        })
        .eq('conversation_id', body.conversation_id);

      if (error) {
        console.error('Failed to update call status:', error);
      }
    }

    // Return success for all webhook events
    return new Response(
      JSON.stringify({ success: true, message: 'Webhook processed' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('❌ Webhook error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
