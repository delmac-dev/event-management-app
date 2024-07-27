"use client";

import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { _dashboardNotifications } from "@/lib/routes";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Notifications() {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='sm' className="aspect-square p-1.5 rounded-full">
                    <Bell size={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent sideOffset={14} className="w-56 flex flex-col mr-4 p-0">
````
            </PopoverContent>
        </Popover>
    )
}