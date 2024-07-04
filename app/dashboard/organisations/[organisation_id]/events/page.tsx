import { Button } from "@/components/ui/button";
import { organisations, OrgType } from "@/lib/constants";
import { QueryProps } from "@/lib/types";
import { findItem } from "@/lib/utils";
import { ArchiveX } from "lucide-react";

export default async function OrganisationEvents({ params }: QueryProps) {
  const organisationID = params.organisation_id;
  const data = findItem(organisationID, organisations) as OrgType;

  return (
    <>
      <section className="section_body">
        <h2 className="font-semibold text-2xl">Organisation Events</h2>
      </section>
      <section className="section_body">
        filter
      </section>
      <section className="section_body">
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Events To Show
          <Button size='xs'>Start an event</Button>
        </div>
      </section>
    </>
  );
}