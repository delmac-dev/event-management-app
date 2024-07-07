"use client";

import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { _dashboardNotifications } from "@/lib/routes";
import { useRouter } from "next/navigation";

export default function Notifications() {
    const router = useRouter();

    return (
        <Button variant='outline' size='sm' className="aspect-square p-1.5 rounded-full" onClick={() => router.push(_dashboardNotifications)}>
            <Bell size={20} />
        </Button>
    )
}