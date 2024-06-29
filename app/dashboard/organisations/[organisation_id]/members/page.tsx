import { QueryProps } from "@/types/global.type";

export default async function OrganisationMembers({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <div className="">
      all {organisationID} members page
    </div>
  );
}