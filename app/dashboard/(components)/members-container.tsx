"use client";

import { useGetMembers } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import { DataTable } from "@/components/common/data-table";
import { columns } from "../organisations/[organisation_id]/members/columns";
import SpinnerIcon from "@/components/icons/spinner-icon";

export default function MembersContainer({organisationID}:{organisationID: string}) {
    const { data: members, isLoading } = useGetMembers(organisationID);

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    return (
        <BodyContent>
            <DataTable columns={columns} data={members || []} />
        </BodyContent>
    )
}