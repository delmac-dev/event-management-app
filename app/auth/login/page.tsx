import OAuthProviders from "@/components/auth/oauth-buttons";
import { _join } from "@/lib/routes";
import Link from "next/link";

export default function Login() {

  return (
    <div className="flex flex-col w-full max-w-xs mx-2 p-2 gap-5">
      <h1 className="font-bold text-2xl text-center">Welcome Back</h1>
      <OAuthProviders />
      <div className="w-full flex_center py-4 gap-2 text-sm">
        <p>Have no account yet ?</p>
        <Link href={_join} className="underline">SignUp here</Link>
      </div>
    </div>
  );
}
