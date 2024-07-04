import { _dashboardOrg, _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { PanelProps } from "@/lib/types";
import Breadcrumbs from "../../(components)/breadcrumbs";
import Panel from "../../(components)/panel";

interface Props {
  children: React.ReactNode,
  params: {[key: string]: string}
} 


export default function Layout({children, params}: Props) {
  const organisationID = params.organisation_id;

  const panel:PanelProps[] = [
    { name: "home", link: _dashboardOrg(organisationID), active: true },
    { name: "events", link: _dashboardOrgEvents(organisationID), active: false },
    { name: "members", link: _dashboardOrgMembers(organisationID), active: false },
    { name: "roles", link: _dashboardOrgRoles(organisationID), active: false },
  ]

  return (
    <>
      <Breadcrumbs panel={panel} />
      <div className="section p-0 flex-1 flex">
        <aside className="hidden lg:flex w-64 min-h-[100vh-96px]">
          <Panel panel={panel} />
        </aside>
        <aside className="min-w-0 flex-1 h-full">
          { children }
        </aside>
      </div>
    </>
  );
}