import { QueryProps } from "@/lib/types";

export default async function OrganisationMembers({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <div className="">
      organisation members page
    </div>
  );
}