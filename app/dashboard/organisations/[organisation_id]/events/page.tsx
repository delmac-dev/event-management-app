import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
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
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Events</h2>
      </BodyHeader>
      <BodyContent>
        <div className="w-full h-64 rounded-lg border border-dashed flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Events To Show
          <Button size='xs'>Start an event</Button>
        </div>
      </BodyContent>
    </>
  );
}