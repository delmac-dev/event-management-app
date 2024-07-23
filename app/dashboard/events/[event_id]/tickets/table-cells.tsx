"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleAttendeeForm from "@/components/forms/handle-attendee";
import HandleTicketForm from "@/components/forms/handle-ticket";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteEventTicket } from "@/lib/query-hooks";
import { FetchedTicketsProps } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export type TableCellProps = {
    type: 'action',
    data: FetchedTicketsProps
}

export function TableCell({type, data}:TableCellProps) {
    switch(type) {
      case 'action': return <Action ticket={data} eventID={data.event_id} />
    }
}

const Action = ({ ticket, eventID }:{ ticket: FetchedTicketsProps, eventID: string }) => {
    const {mutate: deleteEventTicket, isError, isSuccess} = useDeleteEventTicket(eventID);
    const [open, setOpen] = useState(false);
    const wrapperData = { title: "Edit this ticket", open, setOpen }

    const handleDelete = () => {
        deleteEventTicket({id: ticket.id});
    }

    useEffect(() => {

        if (isError) {
            toast.error("Error occurred deleting a ticket");
        };

        if (isSuccess) {
            toast.success("Ticket deleted successfully");
        }

    }, [isError, isSuccess]);

    return(
        <>
            <SheetFormWrapper { ...wrapperData }>
                <HandleTicketForm eventID={eventID} closeHandler={()=> setOpen(false)} ticket={ticket} />
            </SheetFormWrapper>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <EllipsisVertical className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setOpen(true)}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDelete}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}