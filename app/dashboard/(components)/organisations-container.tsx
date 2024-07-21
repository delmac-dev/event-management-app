"use client";

import { useGetUserOrganisations } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import OrganisationCard from "./organisation-card";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { ArchiveX } from "lucide-react";

export default function OrganisationsContainer() {
    const { data: organisations, isLoading, isError } = useGetUserOrganisations();

    if(isLoading) {
        return (
            <BodyContent className="flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </BodyContent>
        )
    }

    if(organisations && organisations.length === 0) {
        return (
            <BodyContent className="flex_center h-64 rounded-lg border border-dashed border-spacing-4 flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX className="text-secondary-foreground" />
                You have no organisations
            </BodyContent>
        )
    }
    
    return (
        <BodyContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
          {organisations?.map((org, _id) => (
            <OrganisationCard key={_id} {...org} />
          ))}
      </BodyContent>
    )
}