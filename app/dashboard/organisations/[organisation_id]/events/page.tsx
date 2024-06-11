import { QueryProps } from "@/lib/types";

export default async function OrganisationEvents({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <div className="">
      all {organisationID} events page
    </div>
  );
}