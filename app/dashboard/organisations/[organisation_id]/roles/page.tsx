import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { ArchiveX } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/common/data-table";

export default async function OrganisationRoles({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Roles</h2>
      </BodyHeader>
      <BodyContent>
      <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}