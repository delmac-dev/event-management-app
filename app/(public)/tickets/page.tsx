import { LinksProp, StarterLink } from "@/components/starter";
import { _ticket } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "ticket one", link: _ticket("ticket3456789")},
  {name: "ticket two", link: _ticket("ticket1234098")},
  {name: "ticket three", link: _ticket("ticket12345")},
  {name: "ticket four", link: _ticket("ticket908765")},
]

export default async function Tickets() {

  return (
    <StarterLink links={data} isPrimary />
  );
}