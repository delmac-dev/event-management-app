"use client";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { _dashboard, _dashboardEvents, _dashboardProfile, _dashboardProfileEdit, _dashboardTickets } from "@/lib/routes";
import Link from "next/link";
import SignOutButton from "../auth/signout-button";
import { useState } from "react";
import { useGetProfile } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const linkList = [
    {name: "My profile", link: _dashboardProfileEdit},
    {name: "Dashboard", link: _dashboard},
    {name: "Start an event", link: `${_dashboardEvents}/?new=true`},
    {name: "My tickets", link: _dashboardTickets},
]

const userThemes = [
    {name: 'light', icon: Sun},
    {name: 'dark', icon: Moon},
    {name: 'system', icon: Monitor},
]

export default function ProfileAvatar() {
    const [ open, setOpen ] = useState<boolean>(false);
    const { data: profile, isLoading } = useGetProfile();
    const { theme, setTheme } = useTheme()

    const isActive = (userTheme: string) => (theme === userTheme)

    if(isLoading) {
        return (
            <div>
                <SpinnerIcon className="size-7 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" size='sm' className="flex items-center gap-2 rounded-full p-1.5" onClick={()=>setOpen(true)}>
                        {profile && 
                            <Image 
                                src={profile.avatar_url || ""} 
                                height={40} 
                                width={40} 
                                alt="avatar" 
                                className="w-7 h-7 rounded-full" 
                            />
                        }
                        <ChevronDown size={16} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent sideOffset={14} className="w-56 flex flex-col mr-4 p-0">
                    {linkList.map(({ name, link }, _id) => (
                        <PopoverClose key={_id} asChild>
                            <Link  
                                href={link}
                                className="w-full p-2.5 text-sm hover:bg-secondary"
                            >
                                {name}
                            </Link>
                        </PopoverClose>
                    ))}
                    <SignOutButton extraAction={()=> setOpen(false)} />
                    <div className="w-full mt-2 border-t bg-muted/20 p-2 flex_center justify-start gap-4">
                        {userThemes.map((item) => (
                            <Button variant='ghost' className={cn("size-8 p-0", isActive(item.name) && 'bg-muted')} onClick={() => setTheme(item.name)}>
                                <item.icon className="size-5 text-muted-foreground" />
                            </Button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}