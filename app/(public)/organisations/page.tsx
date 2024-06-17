import { _organisation } from "@/lib/routes";
import Header from "../(components)/header";
import Link from "next/link";

export default async function Organisations() {
  return (
    <>
      <Header />
      <section>filter section</section>
      <section>list of organisations section eg: <Link href={_organisation("example-organisation")} className="hover:underline">example organisation</Link></section>
      <footer>footer section</footer>
    </>
  );
}