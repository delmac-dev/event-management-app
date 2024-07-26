"use client";

import SpinnerIcon from "@/components/icons/spinner-icon";
import EventCard from "./event-card";
import { ArchiveX } from "lucide-react";
import { useGetPublicEvents } from "@/lib/query-hooks";

export default function EventsContainer () {
    const {data:events, isLoading, isError} = useGetPublicEvents();
    
    if(isLoading) {
        return (
            <section className="sub_container flex_center w-full h-80">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </section>
        )
    }

    if(events && events.length === 0) {
        return (
            <section className="sub_container flex_center h-64 flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX className="text-secondary-foreground" />
                There are no events happening
            </section>
        )
    }

     return (
        <section className="sub_container gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
            {events?.map((event, _id) => (
                <EventCard key={_id} {...event} />
            ))}
        </section>
     )
}