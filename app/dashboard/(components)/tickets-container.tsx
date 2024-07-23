"use client";

import { DataTable } from "@/components/common/data-table";
import BodyContent from "./body-content";
import { columns } from "../events/[event_id]/tickets/columns";
import { useGetEventTickets } from "@/lib/query-hooks";
import SpinnerIcon from "@/components/icons/spinner-icon";

export default function TicketsContainer({eventID}:{eventID: string}) {
    const { data: tickets, isLoading } = useGetEventTickets(eventID);

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    return (
        <BodyContent>
            <DataTable columns={columns} data={tickets ?? []} />
        </BodyContent>
    )
}