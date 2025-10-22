/// <reference path="../.astro/types.d.ts" />
// src/env.d.ts
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly ELEVENLABS_API_KEY: string;
    readonly ELEVENLABS_AGENT_ID: string;
    readonly ELEVENLABS_PHONE_NUMBER_ID: string;
    readonly SUPABASE_URL: string;
    readonly SUPABASE_ANON_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }