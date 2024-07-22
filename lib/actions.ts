"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";
import { redirect } from "next/navigation";
import { _login } from "./routes";
import { getUrl } from "./utils";


export const signInWithOAuth = async (provider: Provider) =>  {
  
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: getUrl("/auth/callback"),
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