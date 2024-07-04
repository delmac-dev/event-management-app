import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { ArchiveX } from "lucide-react";

export default async function OrganisationMembers({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <section className="section_body">
        <h2 className="font-semibold text-2xl">Organisation Members</h2>
      </section>
      <section className="section_body">
        filter
      </section>
      <section className="section_body">
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Members Yet
          <Button size='xs'>Add a member</Button>
        </div>
      </section>
    </>
  );
}