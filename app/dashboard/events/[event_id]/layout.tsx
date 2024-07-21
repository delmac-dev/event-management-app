import { _dashboardEventAttendees, _dashboardEventEdit, _dashboardEventTickets } from "@/lib/routes";
import { NavigationProps } from "@/lib/types";
import BodyNavigation from "../../(components)/body-navigation";

interface LayoutProps {
  children: React.ReactNode,
  params: {[key: string]: string}
} 

export default function Layout({children, params}: LayoutProps) {
  const eventID = params.event_id;
  
  const navigationList:NavigationProps[] = [
    { name: "tickets", link: _dashboardEventTickets(eventID), active: false },
    { name: "attendees", link: _dashboardEventAttendees(eventID), active: false },
    { name: "edit", link: _dashboardEventEdit(eventID), active: true },
  ]

  return (
    <>
      <BodyNavigation navigationList={navigationList} />
      { children }
    </>
  );
}