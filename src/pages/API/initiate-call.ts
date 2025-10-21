// src/pages/api/initiate-call.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

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

    // Call ElevenLabs API directly
    const elevenlabsResponse = await fetch(
      'https://api.elevenlabs.io/v1/convai/conversation',
      {
        method: 'POST',
        headers: {
          'xi-api-key': import.meta.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          agent_id: import.meta.env.ELEVENLABS_AGENT_ID,
          // Mode for outbound call
          mode: {
            type: 'outbound_call',
            phone_number: phone
          },
          // Optional custom variables
          custom_variables: {
            customer_name: fullName,
            customer_email: email,
            lead_source: 'website_cta'
          }
        })
      }
    );

    if (!elevenlabsResponse.ok) {
      const errorData = await elevenlabsResponse.json();
      console.error('ElevenLabs API Error:', errorData);
      
      throw new Error(
        errorData.detail || 
        errorData.message || 
        `API request failed with status ${elevenlabsResponse.status}`
      );
    }

    const result = await elevenlabsResponse.json();
    console.log('Call initiated successfully:', result);

    return new Response(
      JSON.stringify({
        success: true,
        conversationId: result.conversation_id,
        message: 'Call initiated successfully. You should receive a call within 30 seconds.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('Error initiating call:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to initiate call'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};