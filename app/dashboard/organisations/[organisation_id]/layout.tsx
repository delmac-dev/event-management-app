import { _dashboardOrgEdit, _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { NavigationProps } from "@/lib/types";
import BodyNavigation from "../../(components)/body-navigation";

interface Props {
  children: React.ReactNode,
  params: {[key: string]: string}
} 


export default function Layout({children, params}: Props) {
  const organisationID = params.organisation_id;

  const navigationList:NavigationProps[] = [
    { name: "events", link: _dashboardOrgEvents(organisationID), active: false },
    { name: "members", link: _dashboardOrgMembers(organisationID), active: false },
    { name: "roles", link: _dashboardOrgRoles(organisationID), active: false },
    { name: "edit", link: _dashboardOrgEdit(organisationID), active: true },
  ]

  return (
    <>
      <BodyNavigation navigationList={navigationList} />
      { children }
    </>
  );
}