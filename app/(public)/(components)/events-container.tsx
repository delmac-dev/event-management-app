"use client";

import { events } from "@/lib/constants";
import EventCard from "./event-card";

export default function EevntsContainer () {
     return (
        <div className="w-full p-4 pb-16 flex flex-col gap-4">
            {events.map((event, _id) => (
                <EventCard key={_id} {...event} />
            ))}
        </div>
     )
}