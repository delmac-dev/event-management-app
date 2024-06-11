import { LinksProp, StarterLink } from "@/components/starter";
import { _event } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "project one", link: _event("project-one")},
  {name: "project two", link: _event("project-two")},
  {name: "project three", link: _event("project-three")},
  {name: "project four", link: _event("project-four")},
]

export default async function Events() {

  return (
    <StarterLink links={data} isPrimary />
  );
}