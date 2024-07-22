"use client";

import { useGetOrgansationMembers } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import { DataTable } from "@/components/common/data-table";
import { columns } from "../organisations/[organisation_id]/members/columns";
import { ArchiveX } from "lucide-react";
import SpinnerIcon from "@/components/icons/spinner-icon";

export default function MembersContainer({organisationID}:{organisationID: string}) {
    const { data: members, isLoading } = useGetOrgansationMembers(organisationID);

    console.log(members);

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    if(members && members.length === 0) {
        return (
            <BodyContent className="flex_center h-64 rounded-lg border border-dashed border-spacing-4 flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX className="text-secondary-foreground" />
                You have no members
            </BodyContent>
        )
    }

    return (
        <BodyContent>
            <DataTable columns={columns} data={[]} />
        </BodyContent>
    )
}