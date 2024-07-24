"use client";

import { events } from "@/lib/constants";
import EventCard from "./event-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function EevntsContainer() {
    return (
        <div className="w-full">
            <ScrollArea className="lg:max-w-[calc(100vw-40rem)] max-w-[calc(100vw-2rem)]">
                <div className="w-full flex gap-x-1.5 gap-y-3">
                    {events.map((event, _id) => (
                        <EventCard key={_id} {...event} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>


    )
}