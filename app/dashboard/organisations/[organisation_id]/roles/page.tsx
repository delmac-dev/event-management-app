import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/common/data-table";
import MemberRoleHandler from "@/app/dashboard/(form-handlers)/member-role-handler";

export default async function OrganisationRoles({ params, searchParams }: QueryProps) {
  const organisationID = params.organisation_id;
  const isRoleFormOpen = searchParams.new as unknown as boolean;
  const roleHandlerData = {
    title: "Add a new role",
    isOpen: isRoleFormOpen
  };

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Roles</h2>
        <MemberRoleHandler { ...roleHandlerData } />
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}