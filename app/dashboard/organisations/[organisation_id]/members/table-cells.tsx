"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleMemberForm from "@/components/forms/handle-member";
import HandleTicketForm from "@/components/forms/handle-ticket";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteMember } from "@/lib/query-hooks";
import { FetchedMembersProps } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export type TableCellProps = {
    type: 'action' | 'full_name' | 'email',
    data: FetchedMembersProps
}

export function TableCell({type, data}:TableCellProps) {
    switch(type) {
      case 'action': return <Action member={data} organisationID={data.organisation_id} />
      case 'full_name': return <FullName fullName={data.profiles.full_name} />
      case 'email': return <Email email={data.profiles.email} />
    }
}

const Action = ({ member, organisationID }:{ member: FetchedMembersProps, organisationID: string }) => {
    const {mutate: deleteMember, isError, isSuccess} = useDeleteMember(organisationID);
    const [open, setOpen] = useState(false);
    const wrapperData = { title: "Edit this member", open, setOpen }

    const handleDelete = () => {
        deleteMember({id: member.id});
    }

    useEffect(() => {

        if (isError) {
            toast.error("Error occurred deleting a member");
        };

        if (isSuccess) {
            toast.success("Member deleted successfully");
        }

    }, [isError, isSuccess]);

    return(
        <>
            <SheetFormWrapper { ...wrapperData }>
                <HandleMemberForm orgID={organisationID} closeHandler={()=>setOpen(false)}  member={member}/>
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

const FullName = ({ fullName }: { fullName: string }) => {

    return (
        <>{fullName}</>
    )
}

const Email = ({ email }: { email: string }) => {

    return (
        <>{email}</>
    )
}