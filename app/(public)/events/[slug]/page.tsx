import { _joinEvent } from "@/lib/routes";
import Header from "../../(components)/header";
import Link from "next/link";
import Footer from "../../(components)/footer";
import { QueryProps } from "@/types/global.type";

export default async function Event({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <Header />
      <section>{slug} details eg: <Link href={_joinEvent("example-event")} className="hover:underline">join the event</Link></section>
      <Footer />
    </>
  );
}