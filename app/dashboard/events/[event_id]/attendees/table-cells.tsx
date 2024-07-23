"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleAttendeeForm from "@/components/forms/handle-attendee";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteEventAttendee } from "@/lib/query-hooks";
import { FetchedAttendeeProps } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export type TableCellProps = {
    type: 'action',
    data: FetchedAttendeeProps
}

export function TableCell({type, data}:TableCellProps) {
    switch(type) {
      case 'action': return <Action attendee={data} eventID={data.event_id} />
    }
}

const Action = ({ attendee, eventID }:{ attendee: FetchedAttendeeProps, eventID: string }) => {
    const {mutate: deleteEventAttendee, isError, isSuccess} = useDeleteEventAttendee(eventID);
    const [open, setOpen] = useState(false);
    const wrapperData = { title: "Edit this attendee", open, setOpen }

    const handleDelete = () => {
        deleteEventAttendee({id: attendee.id});
    }

    useEffect(() => {

        if (isError) {
            toast.error("Error occurred deleteing a attendee");
        };

        if (isSuccess) {
            toast.success("Attendee deleted successfully");
        }

    }, [isError, isSuccess]);

    return(
        <>
            <SheetFormWrapper { ...wrapperData }>
                <HandleAttendeeForm closeHandler={() => setOpen(false)} eventID={eventID} attendee={attendee} />
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
  )}