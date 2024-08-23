"use client";

import { useGetMyTickets } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import SpinnerIcon from "@/components/icons/spinner-icon";
import TicketCard from "./ticket-card";
import { ArchiveX } from "lucide-react";

export default function MyTicketContainer() {
    const { data: myTickets, isLoading } = useGetMyTickets();

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    if(myTickets && myTickets.length === 0) {
        return (
            <BodyContent className="flex_center h-64 rounded-lg border border-dashed border-spacing-4 flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX className="text-secondary-foreground" />
                You have no tickets
            </BodyContent>
        )
    }

    return (
        <BodyContent className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {myTickets?.map((ticket, _id) => (
                <TicketCard key={_id} {...ticket} />
            ))}
      </BodyContent>
    )
}