import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { DataTable } from "@/components/common/data-table";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { columns } from "./columns";

export default async function OrganisationMembers({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Members</h2>
        <Button size='xs'>Add a member</Button>
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}