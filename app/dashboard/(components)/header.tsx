"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import Notifications from "@/components/common/notification-button";
import ProfileAvatar from "@/components/common/profile-avatar";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { useGetAuthProfile } from "@/lib/query-hooks";
import { _dashboardEvents, _dashboardOrgs, _dashboardTickets, _home, _login } from "@/lib/routes";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { name: "organisations",link: _dashboardOrgs },
    { name: "events", link: _dashboardEvents },
    { name: "tickets", link: _dashboardTickets }
]

export default function Header () {
    return (
        <header className="main_container sticky top-0 left-0 z-50 bg-background h-14 border-b flex_center justify-between">
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
    const { data: user, isLoading, isError, error } = useGetAuthProfile();
    const [open, setOpen] = useState(false); 

    return (
        <div className="h-full flex items-center">
            <div className="h-full flex items-center gap-2 px-3 max-lg:border-r">
                <Notifications />
                {user && !isLoading && <ProfileAvatar user={user} />}
                {isLoading && <SpinnerIcon className="text-secondary-foreground size-7" />}
            </div>
            <MobileNavigation navLinks={navLinks} open={open} setOpen={setOpen} />
        </div>
    )
}