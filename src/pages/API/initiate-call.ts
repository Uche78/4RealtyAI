// src/pages/api/initiate-call.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const POST: APIRoute = async ({ request }) => {
  let leadId = null;
  
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

    console.log('Received request:', { fullName, email, phone });

    // Validate inputs
    if (!fullName || !email || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate phone number format
    const phoneRegex = /^\+\d{11,15}$/;
    if (!phoneRegex.test(phone)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid phone number format. Must include country code (e.g., +14165551234)'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.ELEVENLABS_API_KEY;
    const agentId = import.meta.env.ELEVENLABS_AGENT_ID;
    const agentPhoneNumberId = import.meta.env.ELEVENLABS_PHONE_NUMBER_ID;

    if (!apiKey || !agentId || !agentPhoneNumberId) {
      throw new Error('Missing ElevenLabs credentials');
    }

    console.log('Initiating Twilio outbound call...');

    // ✅ CORRECT WAY: Use conversation_initiation_client_data
    const callPayload = {
      agent_id: agentId,
      agent_phone_number_id: agentPhoneNumberId,
      to_number: phone,
      conversation_initiation_client_data: {
        dynamic_variables: {
          customer_name: fullName
        }
      }
    };

    console.log('Call payload:', JSON.stringify(callPayload, null, 2));

    // Call ElevenLabs API
    const elevenlabsResponse = await fetch(
      'https://api.elevenlabs.io/v1/convai/twilio/outbound-call',
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(callPayload)
      }
    );

    const responseText = await elevenlabsResponse.text();
    console.log('ElevenLabs Response:', responseText);

    if (!elevenlabsResponse.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch {
        errorData = { detail: responseText };
      }
      
      console.error('ElevenLabs API Error:', errorData);
      throw new Error(errorData.detail || 'Failed to initiate call');
    }

    const result = JSON.parse(responseText);
    console.log('Call initiated successfully:', result);

    // ✅ SAVE TO SUPABASE DATABASE
    const { data: savedLead, error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone,
          conversation_id: result.conversation_id,
          call_sid: result.callSid,
          call_status: 'initiated',
          lead_status: 'new',
          lead_source: 'website_cta',
          metadata: {
            user_agent: request.headers.get('user-agent'),
            ip_address: request.headers.get('x-forwarded-for') || 
                        request.headers.get('x-real-ip'),
            referrer: request.headers.get('referer')
          }
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Failed to save lead to database:', dbError);
      // Don't fail the whole request if database save fails
    } else {
      leadId = savedLead.id;
      console.log('✅ Lead saved to database:', savedLead.id);
    }

    return new Response(
      JSON.stringify({
        success: true,
        callId: result.callSid,
        conversationId: result.conversation_id,
        leadId: leadId,
        message: 'Call initiated successfully. You should receive a call within 30 seconds.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('Error initiating call:', error);
    
    // If we have a leadId, update the status to failed
    if (leadId) {
      await supabase
        .from('leads')
        .update({ 
          call_status: 'failed',
          notes: error.message 
        })
        .eq('id', leadId);
    }
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to initiate call. Please try again.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
