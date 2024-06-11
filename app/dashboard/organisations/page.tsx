import { LinksProp, StarterLink } from "@/components/starter";
import { _dashboardOrg } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "orginsation one", link: _dashboardOrg("orginsation-one")},
  {name: "orginsation two", link: _dashboardOrg("orginsation-two")},
  {name: "orginsation three", link: _dashboardOrg("orginsation-three")},
  {name: "orginsation four", link: _dashboardOrg("orginsation-four")},
]

export default async function DashboardOrganisations() {

  return (
    <StarterLink links={data} isPrimary />
  );
}