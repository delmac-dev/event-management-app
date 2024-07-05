import OAuthProviders from "@/components/auth/oauth-buttons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "CampEvents - Login",
  description: "Login into CampusEvents now",
  keywords: ["CampusEvents", "Login to CampusEvents"]
};

export default function Login() {
  return (
    <form className="flex flex-col w-full max-w-xs mx-2 p-2 gap-5">
      <h1 className="font-bold text-2xl text-center">Welcome Back</h1>
      <OAuthProviders />
    </form>
  );
}
