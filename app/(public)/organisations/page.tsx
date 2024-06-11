import { LinksProp, StarterLink } from "@/components/starter";
import { _organisation } from "@/lib/routes";

const data:LinksProp[] = [
  {name: "orginsation one", link: _organisation("orginsation-one")},
  {name: "orginsation two", link: _organisation("orginsation-two")},
  {name: "orginsation three", link: _organisation("orginsation-three")},
  {name: "orginsation four", link: _organisation("orginsation-four")},
]

export default async function Organisations() {

  return (
    <StarterLink links={data} isPrimary />
  );
}