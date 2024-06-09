import { QueryProps } from "@/lib/types";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <div className="">
      dashboard organisation page
    </div>
  );
}