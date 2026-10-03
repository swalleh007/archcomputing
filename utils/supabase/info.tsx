/*
	Supabase credentials should be provided via environment variables.
	- PUBLIC_SUPABASE_PROJECT_ID
	- PUBLIC_SUPABASE_ANON_KEY

	This file now proxies values from Vite's `import.meta.env`. Do NOT commit
	real keys into the repository. See .env.example for usage.
*/

export const projectId = import.meta.env.PUBLIC_SUPABASE_PROJECT_ID || "";
export const publicAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "";