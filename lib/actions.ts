"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";
import { getUrl } from "./utils";
import { redirect } from "next/navigation";
import { _login } from "./routes";

export const SignInWithOauth = async (provider: Provider) => {
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