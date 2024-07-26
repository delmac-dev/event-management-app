"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import Notifications from "@/components/common/notification-button";
import ProfileAvatar from "@/components/common/profile-avatar";
import { Button } from "@/components/ui/button";
import { useGetAuthProfile } from "@/lib/query-hooks";
import { _dashboard, _events, _home, _login, _tickets } from "@/lib/routes";
import { NavigationProps } from "@/lib/types";
import { cn, parseNavigation } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "events",link: _events, active: false },
    { name: "my ticket", link: _tickets, active: false }
]

const actionLinks = [
    {name: "Login", link: _login, variant: "outline"},
    {name: "Dashboard", link: `${_dashboard}`, variant: "default"},
]

export default function Header () {
    const [content, setContent] = useState<NavigationProps[]>(navLinks);
    const pathname = usePathname();

    useEffect(()=> {
        setContent(parseNavigation(pathname, navLinks, true));
    }, [pathname]);

    return (
        <header className="sticky bg-background main_container top-0 left-0 z-10 h-14 border-b flex_center justify-between pl-3 max-lg:pr-1.5 pr-3">
            <div className="flex gap-1 items-center">
                <Logo />
                <Link href={_home} className="text-sm font-semibold">CampusEvents</Link>
            </div>
            <div className="hidden h-full md:flex items-center gap-4">
                {content.map(({name, link, active}, _i) => (
                    <Link key={_i} href={link} className={cn("h-full flex_center font-medium text-sm capitalize border-b-2", active ? "border-primary" : "border-transparent hover:border-primary")}>
                        {name}
                    </Link>
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
                    <ProfileAvatar />
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