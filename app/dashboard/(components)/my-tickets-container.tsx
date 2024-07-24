"use client";

import { useGetMyTickets } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import SpinnerIcon from "@/components/icons/spinner-icon";
import TicketCard from "./ticket-card";

export default function MyTicketContainer() {
    const { data: myTickets, isLoading } = useGetMyTickets();

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
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