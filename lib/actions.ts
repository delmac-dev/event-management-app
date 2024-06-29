"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "./client";
import { getUrl } from "./utils";
import { redirect } from "next/navigation";
import { _login } from "./routes";

export const signInWithOauth = async (provider: Provider) => {
    const supabase = createClient();

    const {data, error} = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: getUrl('/auth/callback'),
        },
    });

    if(error) redirect(`${_login}?error=could not signin with oauth`);

    return redirect(data.url);
}

export const signOut = async () => {
  const supabase = createClient();
  const { error } =  await supabase.auth.signOut();
}