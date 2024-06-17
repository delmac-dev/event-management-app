import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { _dashboard, _events, _home, _organisations, _tickets } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const navLinks = [
    {
        name: "home",
        link: _home
    },
    {
        name: "events",
        link: _events
    },
    {
        name: "organisations",
        link: _organisations
    },
    {
        name: "dashboard",
        link: _dashboard
    },
    {
        name: "find my ticket",
        link: _tickets
    }
]

export default function Header ({user}:{user?: User}) {

    return (
        <header className="relative w-full h-14 flex_center justify-between px-5 md:px-10">
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

const AuthSection = ({user, isMobile = false}:{user?: User, isMobile?: boolean}) => (
    user ? (
        <div className="flex gap-2">
            user goes here
        </div>
    ): (
        <div className={cn(!isMobile? "hidden md:flex gap-2" : "flex gap-2 flex-col md:hidden")}>
            <Button variant={'outline'}>Login</Button>
            <Button>Sign Up</Button>
        </div>
    )
)

const MobileNav = () => {
    return (
        <div className="block md:hidden">
            <Button variant={'ghost'} className="w-10 h-10 p-0">
                <MenuIcon />
            </Button>
        </div>
    )
}