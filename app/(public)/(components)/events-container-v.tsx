"use client";

import { events } from "@/lib/constants";
import EventCard from "./event-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function EevntsContainerV() {
    return (
        <div className="w-full">
            <ScrollArea className="h-96">
                <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 gap-x-1.5 gap-y-3">
                    {events.map((event, _id) => (
                        <EventCard key={_id} {...event} />
                    ))}
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>


    )
}