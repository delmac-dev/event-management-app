"use client";
import { useGetUserOrganisations } from "@/lib/query-hooks";
import BodyContent from "./body-content";
import OrganisationCard from "./organisation-card";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { ArchiveX } from "lucide-react";
import { FetchedOrganisationProps } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function OrganisationsContainer() {
    const { data: organisations, isLoading, isError } = useGetUserOrganisations();

    if (isLoading) {
        return (
            <BodyContent className="flex_center min-h-[50vh]">
                <SpinnerIcon className="w-10 h-10 md:w-12 md:h-12 text-secondary-foreground" />
            </BodyContent>
        )
    }

    if (organisations && organisations.length === 0) {
        return (
            <BodyContent className="flex_center min-h-[50vh] p-4 rounded-lg border border-dashed border-spacing-4 flex-col gap-3 text-sm md:text-base font-medium text-secondary-foreground">
                <ArchiveX className="w-8 h-8 md:w-10 md:h-10 text-secondary-foreground" />
                <p className="text-center">You have no organisations</p>
            </BodyContent>
        )
    }

    return (
        <BodyContent className="space-y-6 pb-7">
            <div className="flex justify-between items-center px-4 md:px-0">
                <h2 className="text-lg md:text-xl font-semibold">Your Organisations</h2>
                <Badge variant="secondary">
                    Total: {organisations?.length || 0}
                </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {organisations?.map((org, _id) => (
                    <OrganisationCard key={_id} {...org as unknown as FetchedOrganisationProps} />
                ))}
            </div>
        </BodyContent>
    )
}