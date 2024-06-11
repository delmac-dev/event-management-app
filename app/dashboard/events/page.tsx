import { LinksProp, StarterLink } from "@/components/starter";
import { _dashboardEvent, _dashboardOrg } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "event one", link: _dashboardEvent("event-one")},
  {name: "event two", link: _dashboardEvent("event-two")},
  {name: "event three", link: _dashboardEvent("event-three")},
  {name: "event four", link: _dashboardEvent("event-four")},
]

export default async function DashboardEvents() {

  return (
    <StarterLink links={data} isPrimary />
  );
}