"use client";

import { OAuthProvider } from "@/lib/types";
import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import GithubIcon from "../icons/github-icon";
import { signIn } from "next-auth/react";


export default async function OAuthProviders({ redirectTo }:{ redirectTo?: string}) {
    const providers:OAuthProvider[] = [
        {
            name: "github",
            icon: GithubIcon
        },
        {
            name: "google",
            icon: GoogleIcon
        },
    ]

    return (
        <>
            {providers.map((provider, _i) => (
                <Button 
                    key={_i} 
                    variant={'outline'} 
                    className="gap-3 capitalize" 
                    onClick={ ()=> signIn(provider.name, { redirectTo })}
                >
                    {provider.icon? <provider.icon /> : ''}
                    Sign In With {provider.name}
                </Button>
            ))}
        </>
    )
}