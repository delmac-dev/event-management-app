import { QueryProps } from "@/lib/types";

export default async function OrganisationRoles({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <div className="">
      all {organisationID} roles page
    </div>
  );
}