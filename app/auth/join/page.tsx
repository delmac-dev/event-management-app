import OAuthProviders from "@/components/auth/oauth-buttons";
import { _login } from "@/lib/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "CampEvents - Join",
  description: "Join campus events for free",
  keywords: ["CampusEvents", "SignUp to CampusEvents", "Join CampusEvents"]
};

export default function Join(){
  return (
    <div className="flex flex-col w-full max-w-xs mx-2 p-2 gap-5">
      <h1 className="font-bold text-2xl text-center">Join CampusEvents</h1>
      <OAuthProviders />
      <div className="w-full flex_center py-4 gap-2 text-sm">
        <p>Already have an account ?</p>
        <Link href={_login} className="underline">Login here</Link>
      </div>
    </div>
  )
}