"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import Notifications from "@/components/common/notification-button";
import ProfileAvatar from "@/components/common/profile-avatar";
import { offlineUser } from "@/lib/constants";
import { _dashboardEvents, _dashboardOrgs, _dashboardTickets, _home } from "@/lib/routes";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// const supabase = createClient();

const navLinks = [
    { name: "organisations",link: _dashboardOrgs },
    { name: "events", link: _dashboardEvents },
    { name: "tickets", link: _dashboardTickets }
]

export default function Header () {
    return (
        <header className="sticky top-0 left-0 w-full bg-background h-14 border-b flex_center justify-between">
            <div className="flex gap-1 h-full items-center px-3 border-r">
                <Logo />
                <Link href={_home} className="text-sm font-semibold hidden lg:block">CampusEvents</Link>
            </div>
            <div className="h-full hidden md:flex_center flex-1 gap-4 px-3 border-r">
                {navLinks.map(({name, link}, _i) => (
                    <Link key={_i} href={link} className="font-medium text-sm capitalize">{name}</Link>
                ))}
            </div>
            <HeaderOptions />
        </header>
    )
}

const HeaderOptions = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // const fetchUser = async () => {
        //     const { data, error } = await supabase.auth.getUser();
        //     if (error) {
        //         console.error('Error fetching user:', error.message);
        //         toast("Error fetching user");
        //         return;
        //     }
        //     setUser(data.user);
        // };
        
        // fetchUser();
        setUser(offlineUser);

    },[]); 

    return (
        <div className="h-full flex gap-1.5 items-center">
            <div className="h-full flex items-center gap-2 px-3 max-lg:border-r">
                <Notifications />
                <ProfileAvatar user={user} />
            </div>
            <MobileNavigation navLinks={navLinks} />
        </div>
    )
}