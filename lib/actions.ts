"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";
import { redirect } from "next/navigation";
import { _login } from "./routes";


export const signInWithOAuth = async (provider: Provider) =>  {
  const origin = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://campusevents.vercel.app`
  : "http://localhost:3000";

  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if(error) 
    redirect(`${_login}?error=could not signin with oauth`);
  
  if (data.url)
    redirect(data.url);
}

export const signOut = async (shouldRedirect: boolean = true) => {
  const supabase = createClient();
  const { error } =  await supabase.auth.signOut();
  if(!error && shouldRedirect) redirect(_login);
}