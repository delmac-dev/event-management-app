"use client";

import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions";
import { _dashboard, _events, _home, _organisations, _tickets } from "@/lib/routes";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const supabase = createClient();

const navLinks = [
    { name: "home", link: _home },
    { name: "events",link: _events },
    { name: "organisations", link: _organisations },
    { name: "dashboard", link: _dashboard },
    { name: "find my ticket", link: _tickets }
]

export default function Header () {

    return (
        <header className="relative w-full h-12 flex_center justify-between px-5 md:px-10">
            <Logo />
            <div className="hidden md:flex gap-4">
                {navLinks.map(({name, link}, _i) => (
                    <Link key={_i} href={link} className="font-medium text-sm capitalize">{name}</Link>
                ))}
            </div>
            <AuthSection />
            <MobileNav />
        </header>
    )
}

const AuthSection = ({isMobile = false}:{ isMobile?: boolean }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error fetching user:', error.message);
                return;
            }
            setUser(data.user);
        };
        
        fetchUser();
    },[]); 

    return (
        <>
            {user ? (
                <form className="flex gap-2">
                    <Button size='xs' formAction={async () => await signOut()}> Sign Out</Button>
                </form>
            ): (
                <div className={cn(!isMobile? "hidden md:flex gap-2" : "flex gap-2 flex-col md:hidden")}>
                    <Button variant={'outline'} size='xs'>Login</Button>
                    <Button size='xs'>Sign Up</Button>
                </div>
            )}
        </>
    )
}

const MobileNav = () => {
    return (
        <div className="block md:hidden">
            <Button variant={'ghost'} className="w-10 h-10 p-0">
                <MenuIcon />
            </Button>
        </div>
    )
}