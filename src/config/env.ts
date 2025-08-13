interface Config {
  supabase: {
    url: string;
    key: string;
  };
}

export const config: Config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
} as const;

// Validate required environment variables
const requiredEnvVars = [
  ['VITE_SUPABASE_URL', config.supabase.url],
  ['VITE_SUPABASE_ANON_KEY', config.supabase.key],
] as const;

for (const [name, value] of requiredEnvVars) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}
