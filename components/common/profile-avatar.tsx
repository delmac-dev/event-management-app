"use client";

import { User, UserMetadata } from "@supabase/supabase-js";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { _dashboardProfile, _dashboardProfileEdit, _dashboardSettings, _dashboardTickets } from "@/lib/routes";
import Link from "next/link";
import SignOutButton from "../auth/signout-button";

const linkList = [
    {name: "My Profile", link: _dashboardProfileEdit},
    {name: "Settings", link: _dashboardSettings},
    {name: "My Tickets", link: _dashboardTickets},
]

export default function ProfileAvatar({ user }: {user:User | null}) {
    const userData:UserMetadata|null = user?.user_metadata ?? null;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size='sm' className="flex items-center gap-2 rounded-full p-1.5">
                    {userData && 
                        <Image 
                            src={userData["avatar_url"]} 
                            height={40} 
                            width={40} 
                            alt="avatar" 
                            className="w-7 h-7 rounded-full" 
                        />
                    }
                    <ChevronDown size={16} />
                </Button>
            </PopoverTrigger>
            <PopoverContent sideOffset={14} className="w-64 flex flex-col mr-4">
                {linkList.map(({ name, link }, _id) => (
                    <PopoverClose key={_id} asChild>
                        <Link  
                            href={link}
                            className="w-full rounded-sm p-2.5 text-sm hover:bg-secondary"
                        >
                            {name}
                        </Link>
                    </PopoverClose>
                ))}
                <SignOutButton />
            </PopoverContent>
        </Popover>
    )
}