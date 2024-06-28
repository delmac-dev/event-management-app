import { _dashboard, _login } from "@/lib/routes";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get('next') ?? _dashboard;

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }
  
  return NextResponse.redirect(`${origin}${_login}?error=couldnt signin with oauth`);
}
