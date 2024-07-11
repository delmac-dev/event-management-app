import { _ticket } from "@/lib/routes";
import Header from "../(components)/header";
import Link from "next/link";
import Footer from "../(components)/footer";
import { QueryProps } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Tickets({ searchParams }: QueryProps) {
  const search = searchParams["s"] ?? "";

  // active to search for attendees with email or ticketcode

  return (
    <>
      <Header />
      <main className="main_container flex-1 flex flex-col">
        <section className="sub_container py-10 flex flex-col items-center">
          <h1 className="text-xl text-medium text-foreground text-center">Find Your Ticket</h1>
          <p className="text-sm text-muted-foreground max-w-prose text-center mt-1.5">Search for your ticket either by the email or ticket code</p>
          {/* find ticket form */}
          <form className="max-w-md mt-10 flex gap-3">
            <Input placeholder="Enter email or ticketCode" />
            <Button className="">
              <Search className="size-5" />
            </Button>
          </form>
        </section>
        <section className="sub_container py-5">
          search results section eg: 
          <Link href={_ticket("example-ticket")} className="hover:underline">
            example ticket
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}