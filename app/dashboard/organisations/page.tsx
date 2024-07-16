import { _dashboardOrg } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import { organisations } from "@/lib/constants";
import { NewOrganisationModal } from "../(forms)/new-organisation-form";
import BodyHeader from "../(components)/body-header";
import BodyContent from "../(components)/body-content";
import OrganisationCard from "../(components)/organisation-card";

export default async function DashboardOrganisations({ searchParams }: QueryProps) {
  const isOrgFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <BodyHeader>
          <h2 className="text-xl font-medium">Organisations</h2>
          <NewOrganisationModal isOpen={isOrgFormOpen} />
      </BodyHeader>
      <BodyContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
          {organisations.map((org, _id) => (
            <OrganisationCard key={_id} {...org} />
          ))}
      </BodyContent>
    </>
  );
}