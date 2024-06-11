import { LinksProp, StarterLink } from "@/components/starter";
import { _event } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "event one", link: _event("event-one")},
  {name: "event two", link: _event("event-two")},
  {name: "event three", link: _event("event-three")},
  {name: "event four", link: _event("event-four")},
]

export default async function Events() {

  return (
    <StarterLink links={data} isPrimary />
  );
}