import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { ArchiveX } from "lucide-react";

export default async function OrganisationMembers({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Members</h2>
      </BodyHeader>
      <BodyContent>
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Members Yet
          <Button size='xs'>Add a member</Button>
        </div>
      </BodyContent>
    </>
  );
}