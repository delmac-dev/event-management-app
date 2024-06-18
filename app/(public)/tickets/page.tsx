import { _ticket } from "@/lib/routes";
import Header from "../(components)/header";
import Link from "next/link";
import Footer from "../(components)/footer";

export default async function Tickets() {
  return (
    <>
      <Header />
      <section>search for a ticket by code</section>
      <section>search results section eg: <Link href={_ticket("example-ticket")} className="hover:underline">example ticket</Link></section>
      <Footer />
    </>
  );
}