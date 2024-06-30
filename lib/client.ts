import { SupabaseClientOptions, createClient as _createClient } from "@supabase/supabase-js";
import { auth } from "@/auth";

export const createClient = async () => {
  const session = await auth();

  const options:SupabaseClientOptions<"public"> = {
    global: {
      headers: {
        Authorization: `Bearer ${session?.supabaseAccessToken}`,
      },
    },
  }

  return _createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    session? options : undefined
  );
};
