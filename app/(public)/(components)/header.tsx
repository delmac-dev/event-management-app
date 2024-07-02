"use client";

import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "@/lib/actions";
import { _dashboard, _events, _home, _join, _login, _organisations, _profile, _tickets } from "@/lib/routes";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { User, UserMetadata } from "@supabase/supabase-js";
import { Bell, ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const supabase = createClient();

const navLinks = [
    { name: "events",link: _events },
    { name: "dashboard", link: _dashboard },
    { name: "my ticket", link: _tickets }
]

export default function Header () {

    return (
        <header className="relative w-full h-14 border-b flex_center justify-between px-5 md:px-10">
            <div className="flex gap-8 items-center">
                <div className="flex gap-1 items-center">
                    <Logo />
                    <p className="text-sm font-semibold">CampusEvents</p>
                </div>
                <div className="hidden md:flex gap-4">
                    {navLinks.map(({name, link}, _i) => (
                        <Link key={_i} href={link} className="font-medium text-sm capitalize">{name}</Link>
                    ))}
                </div>
            </div>
            <HeaderOptions />
        </header>
    )
}

const HeaderOptions = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

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
        <div className="flex gap-1.5 items-center">
            {user ? (
                <div className="flex gap-2">
                    <Notification />
                    <ProfileAvatar user={user} setUser={setUser} />
                </div>
            ): (
                <div className="hidden md:flex gap-2">
                    <Button variant={'outline'} size='sm' className="rounded-full"  onClick={() => router.push(_login)}>Login</Button>
                    <Button size='sm' className="rounded-full"  onClick={() => router.push(_join)}>Sign Up</Button>
                </div>
            )}
            <MobileNav user={user} />
        </div>
    )
}

const MobileNav = ({ user }:{ user:User|null }) => {
    const router = useRouter();

    return (
        <div className="block md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} size='sm' className="p-1.5">
                        <MenuIcon size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-80 py-20">
                    <div className="flex flex-col gap-2">
                        {navLinks.map(({name, link}, _i) => (
                            <Link key={_i} href={link} className="w-full rounded-sm p-2.5 hover:bg-secondary capitalize">{name}</Link>
                        ))}
                    </div>
                    <div className={cn(user? "hidden" : "absolute w-full bottom-4 left-0 flex flex-col gap-2 px-4")}>
                        <Button variant={'outline'} onClick={() => router.push(_login)}>Login</Button>
                        <Button onClick={() => router.push(_join)}>Sign Up</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
};

const ProfileAvatar = ({ user, setUser }:{ user:User, setUser: React.Dispatch<React.SetStateAction<User | null>>}) => {
    const userData:UserMetadata = user.user_metadata;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size='sm' className="flex items-center gap-2 rounded-full p-1.5">
                    <Image src={userData["avatar_url"]} height={40} width={40} alt="avatar" className="w-7 h-7 rounded-full" />
                    <ChevronDown size={16} />
                </Button>
            </PopoverTrigger>
            <PopoverContent sideOffset={14} className="w-64 flex flex-col mr-4">
                <Link href={_profile(user.id)} className="w-full rounded-sm p-2.5 text-sm hover:bg-secondary">My Profile</Link>
                <Link href={_dashboard} className="w-full rounded-sm p-2.5 text-sm hover:bg-secondary">Dashboard</Link>
                <form>
                    <Button 
                        type="submit"  
                        className="mt-4 w-full" 
                        formAction={async()=> {
                            await signOut();
                            setUser(null);
                        }}>
                        SignOut
                    </Button>
                </form>
            </PopoverContent>
        </Popover>
    )
}

const Notification = () => (
    <Button variant='outline' size='sm' className="aspect-square p-1.5 rounded-full">
        <Bell size={20} />
    </Button>
)