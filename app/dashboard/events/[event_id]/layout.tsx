import { LinksProp, StarterLink } from "@/components/starter";
import { _dashboardEvent, _dashboardEventAttendees, _dashboardEventModerators, _dashboardEventRoles, _dashboardEventTickets } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

interface LayoutProps extends QueryProps {
  children: React.ReactNode
} 

export default function Layout({children, params}: LayoutProps) {
  const eventID = params.event_id;
  const data:LinksProp[] = [
    {name: "edit", link: _dashboardEvent(eventID)},
    {name: "attendees", link: _dashboardEventAttendees(eventID)},
    {name: "moderators", link: _dashboardEventModerators(eventID)},
    {name: "roles", link: _dashboardEventRoles(eventID)},
    {name: "tickets", link: _dashboardEventTickets(eventID)},
  ]

  return (
    <>
      <StarterLink links={data} isPrimary />
      { children }
    </>
  );
}