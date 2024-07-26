"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import Notifications from "@/components/common/notification-button";
import ProfileAvatar from "@/components/common/profile-avatar";
import { _dashboardEvents, _dashboardOrgs, _dashboardTickets, _home, _login } from "@/lib/routes";
import { NavigationProps } from "@/lib/types";
import { cn, parseNavigation } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "organisations",link: _dashboardOrgs, active: false },
    { name: "events", link: _dashboardEvents, active: false },
    { name: "tickets", link: _dashboardTickets, active: false }
]

export default function Header () {
    const [content, setContent] = useState<NavigationProps[]>(navLinks);
    const pathname = usePathname();

    useEffect(()=> {
        setContent(parseNavigation(pathname, navLinks, true));
    }, [pathname]);

    return (
        <header className="main_container sticky top-0 left-0 z-50 bg-background h-14 border-b flex_center justify-between">
            <div className="flex gap-1 h-full items-center px-3 border-r">
                <Logo />
                <Link href={_home} className="text-sm font-semibold hidden lg:block">CampusEvents</Link>
            </div>
            <div className="h-full hidden md:flex_center flex-1 gap-4 px-3 border-r">
                {content.map(({name, link, active}, _i) => (
                    <Link key={_i} href={link} className={cn("h-full flex_center font-medium text-sm capitalize  border-b-2", active ? "border-primary" : "border-transparent hover:border-primary")}>
                        {name}
                    </Link>
                ))}
            </div>
            <HeaderOptions />
        </header>
    )
}

const HeaderOptions = () => {
    const [open, setOpen] = useState(false); 

    return (
        <div className="h-full flex items-center">
            <div className="h-full flex items-center gap-2 px-3 max-lg:border-r">
                <Notifications />
                <ProfileAvatar />
            </div>
            <MobileNavigation navLinks={navLinks} open={open} setOpen={setOpen} />
        </div>
    )
}