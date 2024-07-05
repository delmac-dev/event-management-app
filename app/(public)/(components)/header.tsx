"use client";

import Logo from "@/components/common/logo";
import MobileNavigation from "@/components/common/mobile-navigation";
import ProfileAvatar from "@/components/common/profile-avatar";
import { Button } from "@/components/ui/button";
import { offlineUser } from "@/lib/constants";
import { _dashboard, _dashboardEvents, _events, _home, _login, _tickets } from "@/lib/routes";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { Bell } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// const supabase = createClient();

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
        <header className="main_container h-14 border-b flex_center justify-between pl-3 max-lg:pr-1.5 pr-3">
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
        <div className="flex gap-1.5 items-center">
            {user ? (
                <div className="flex gap-2">
                    <Notification />
                    <ProfileAvatar user={user} />
                </div>
            ): (
                <div className="hidden md:flex gap-2">
                    <ActionButtons />
                </div>
            )}
            <MobileNavigation navLinks={navLinks}>
                <div className={cn(user? "hidden" : "absolute w-full bottom-4 left-0 flex flex-col gap-2 px-4")}>
                    <ActionButtons isMobile />
                </div>
            </MobileNavigation>
        </div>
    )
}

const ActionButtons = ({isMobile = false} : {isMobile?: boolean}) => {
    const router = useRouter();

    return (
        <>
            {actionLinks.map(({ name, variant, link }, _id)=> (
                <Button 
                    key={_id}
                    variant={variant as "outline" | "default"} 
                    size='sm'
                    className={cn( !isMobile && "rounded-full" )} 
                    onClick={() => router.push(link)}
                >
                    {name}
                </Button>
            ))}
        </>
    )
}

const Notification = () => (
    <Button variant='outline' size='sm' className="aspect-square p-1.5 rounded-full">
        <Bell size={20} />
    </Button>
)