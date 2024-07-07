import { _attendEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import Link from "next/link";

export default async function Event({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <Header />
      <section>{slug} details eg: <Link href={_attendEvent("example-event")} className="hover:underline">join the event</Link></section>
    </>
  );
}