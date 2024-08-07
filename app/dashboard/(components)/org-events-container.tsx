"use client";

import { useGetOrganisationEvents } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { ArchiveX } from "lucide-react";
import EventCard from "./event-card";
import { FetchedEventProps } from "@/lib/types";

export default function OrgEventContainer({organisationID}:{organisationID: string}) {
    const { data: events, isLoading } = useGetOrganisationEvents(organisationID);

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    if(events && events.length === 0) {
        return (
            <BodyContent className="flex_center h-64 rounded-lg border border-dashed border-spacing-4 flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX className="text-secondary-foreground" />
                You have no events
            </BodyContent>
        )
    }

    return (
        <BodyContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
            {events?.map((event, _id) => (
                <EventCard key={_id} {...event as unknown as FetchedEventProps} />
            ))}
        </BodyContent>
    )
}