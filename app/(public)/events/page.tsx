import Link from "next/link";
import Header from "../(components)/header";
import { _event } from "@/lib/routes";

export default async function Events() {
  return (
    <>
      <Header />
      <section>filter section</section>
      <section>events list section eg: <Link href={_event("example-event")} className="hover:underline">example event</Link></section>
      <footer>footer</footer>
    </>
  );
}