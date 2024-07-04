import { _dashboardEvent, _dashboardEventAttendees, _dashboardEventEdit, _dashboardEventModerators, _dashboardEventRoles, _dashboardEventTickets } from "@/lib/routes";
import { PanelProps } from "@/lib/types";
import Breadcrumbs from "../../(components)/breadcrumbs";
import Panel from "../../(components)/panel";

interface LayoutProps {
  children: React.ReactNode,
  params: {[key: string]: string}
} 

export default function Layout({children, params}: LayoutProps) {
  const eventID = params.event_id;
  
  const panel:PanelProps[] = [
    { name: "home", link: _dashboardEvent(eventID), active: true },
    { name: "edit", link: _dashboardEventEdit(eventID), active: true },
    { name: "tickets", link: _dashboardEventTickets(eventID), active: false },
    { name: "attendees", link: _dashboardEventAttendees(eventID), active: false },
    { name: "moderators", link: _dashboardEventModerators(eventID), active: false },
    { name: "roles", link: _dashboardEventRoles(eventID), active: false },
  ]

  return (
    <>
      <Breadcrumbs panel={panel} />
      <div className="section p-0 flex-1 flex">
        <aside className="hidden lg:flex w-64 min-h-[100vh-96px]">
          <Panel panel={panel} />
        </aside>
        <aside className="min-w-0 flex-1 h-full px-2 pb-14">
          { children }
        </aside>
      </div>
    </>
  );
}