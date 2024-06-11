import { LinksProp, StarterLink } from "@/components/starter";
import { _joinEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

const data:LinksProp[] = [
  {name: "join an event", link: _joinEvent("project-one")},
]

export default async function Event({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <StarterLink links={data} isPrimary />
      {slug} page
    </>
  );
}