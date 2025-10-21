// src/env.d.ts
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly ELEVENLABS_API_KEY: string;
    readonly ELEVENLABS_AGENT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }