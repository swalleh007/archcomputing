import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../../utils/supabase/info";

// Prefer an explicit PUBLIC_SUPABASE_URL env var, otherwise derive from projectId.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || (projectId ? `https://${projectId}.supabase.co` : "");
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || publicAnonKey;

if (!supabaseUrl || !supabaseAnonKey) {
	// Fail fast in development to avoid silent misconfigurations.
	// In production, ensure environment variables are set securely.
	// eslint-disable-next-line no-console
	console.warn("Supabase client not fully configured. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
