"use client";

import { events } from "@/lib/constants";
import EventCard from "./event-card";

export default function EevntsContainer () {
     return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-1.5 gap-y-3">
            {events.map((event, _id) => (
                <EventCard key={_id} {...event} />
            ))}
        </div>
     )
}