import { LinksProp, StarterLink } from "@/components/starter";
import { _dashboardOrg, _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

interface Props extends QueryProps {
  children: React.ReactNode,
  params: {[key: string]: string}
} 

export default function Layout({children, params}: Props) {
  const organisationID = params.organisation_id;
  const data:LinksProp[] = [
    {name: "edit", link: _dashboardOrg(organisationID)},
    {name: "events", link: _dashboardOrgEvents(organisationID)},
    {name: "members", link: _dashboardOrgMembers(organisationID)},
    {name: "roles", link: _dashboardOrgRoles(organisationID)},
  ]

  return (
    <>
      <StarterLink links={data} isPrimary />
      { children }
    </>
  );
}