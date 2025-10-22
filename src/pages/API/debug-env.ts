import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      hasApiKey: !!import.meta.env.ELEVENLABS_API_KEY,
      apiKeyPrefix: import.meta.env.ELEVENLABS_API_KEY?.substring(0, 7) || 'NOT SET',
      hasAgentId: !!import.meta.env.ELEVENLABS_AGENT_ID,
      agentIdPrefix: import.meta.env.ELEVENLABS_AGENT_ID?.substring(0, 8) || 'NOT SET'
    }, null, 2),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};