import { SupabaseAdapter } from "@auth/supabase-adapter";
import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github"

export default {
    providers: [GitHub],
    adapter: SupabaseAdapter({
        url: process.env.SUPABASE_URL!,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    }),
} satisfies NextAuthConfig;