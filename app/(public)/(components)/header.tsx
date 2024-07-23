"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import Notifications from "@/components/common/notification-button";
import ProfileAvatar from "@/components/common/profile-avatar";
import { Button } from "@/components/ui/button";
import { useGetAuthProfile } from "@/lib/query-hooks";
import { _dashboard, _dashboardEvents, _events, _home, _login, _tickets } from "@/lib/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const navLinks = [
    { name: "events",link: _events },
    { name: "dashboard", link: _dashboard },
    { name: "my ticket", link: _tickets }
]

const actionLinks = [
    {name: "Login", link: _login, variant: "outline"},
    {name: "Start An Event", link: `${_dashboardEvents}?new=true`, variant: "default"},
]

export default function Header () {
    return (
        <header className="sticky bg-background main_container top-0 left-0 z-10 h-14 border-b flex_center justify-between pl-3 max-lg:pr-1.5 pr-3">
            <div className="flex gap-1 items-center">
                <Logo />
                <Link href={_home} className="text-sm font-semibold">CampusEvents</Link>
            </div>
            <div className="hidden md:flex items-center gap-4">
                {navLinks.map(({name, link}, _i) => (
                    <Link key={_i} href={link} className="font-medium text-sm capitalize">{name}</Link>
                ))}
            </div>
            <HeaderOptions />
        </header>
    )
}

const HeaderOptions = () => {
    const { data: user } = useGetAuthProfile();
    const [open, setOpen] = useState(false);

    return (
        <div className="flex gap-1.5 items-center">
            {user ? (
                <div className="flex gap-2">
                    <Notifications />
                    <ProfileAvatar user={user} />
                </div>
            ): (
                <div className="hidden md:flex gap-2">
                    <ActionButtons />
                </div>
            )}
            <MobileNavigation navLinks={navLinks} open={open} setOpen={setOpen}> 
                <div className={cn(user? "hidden" : "absolute w-full bottom-4 left-0 flex flex-col gap-2 px-4")}>
                    <ActionButtons isMobile onClick={() => setOpen(false)} />
                </div>
            </MobileNavigation>
        </div>
    )
}

const ActionButtons = ({isMobile = false, onClick = () => null} : {isMobile?: boolean, onClick?: () => void}) => {
    const router = useRouter();
    const handleClick = (link: string) => {
        router.push(link);
        onClick();
    }
    return (
        <>
            {actionLinks.map(({ name, variant, link }, _id)=> (
                <Button 
                    key={_id}
                    variant={variant as "outline" | "default"} 
                    size='sm'
                    className={cn( !isMobile && "rounded-full" )} 
                    onClick={() => handleClick(link)}
                >
                    {name}
                </Button>
            ))}
        </>
    )
}