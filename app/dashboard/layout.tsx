import { StarterHeader, StarterProps } from "@/components/starter";
import { _dashboardEvents, _dashboardNotifications, _dashboardOrgs, _dashboardProfile, _dashboardSettings, _dashboardTickets } from "@/lib/routes";

const data: StarterProps = {
  title: "Dashboard Links",
  description: "Links for all dashboard pages",
  links: [
    {name: "organisations", link: _dashboardOrgs},
    {name: "events", link: _dashboardEvents},
    {name: "tickets", link: _dashboardTickets},
    {name: "settings", link: _dashboardSettings},
    {name: "my profile", link: _dashboardProfile},
    {name: "notifications", link: _dashboardNotifications},
  ]
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <StarterHeader {...data} />
      { children }
    </>
  );
}