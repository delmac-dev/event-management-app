"use client";

import { _ticket } from "@/lib/routes";
import Header from "../(components)/header";
import Footer from "../(components)/footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetSearchedTickets } from "@/lib/query-hooks";
import { useState } from "react";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FormSchema = z.object({
  query: z.string().min(1, "Must enter a query"),
})

export type QueryTicket = z.infer<typeof FormSchema>;

export default function Tickets() {
  const [search, setSearch] = useState("");
  const {data: searchedTickets, isLoading} = useGetSearchedTickets(search);

  const form = useForm<QueryTicket>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        query: '',
    }
});

  const onSubmit = (data: QueryTicket) => {
    setSearch(data.query);
  };

  const { handleSubmit, register } = form;

  return (
    <>
      <Header />
      <main className="main_container flex-1 flex flex-col">
        <section className="sub_container py-10 flex flex-col items-center">
          <h1 className="text-xl text-medium text-foreground text-center">Find Your Ticket</h1>
          <p className="text-sm text-muted-foreground max-w-prose text-center mt-1.5">Search for your ticket either by the email or ticket code</p>
          <form className="max-w-md mt-10 flex gap-3" onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Enter email or ticketCode" {...register("query")}/>
            <Button type="submit" className="">
              <Search className="size-5" />
            </Button>
          </form>
        </section>
        <section className="sub_container py-5">
        {
          isLoading ? 
            (<Loading />) : 
            searchedTickets && searchedTickets.length > 0 ? 
              (<SearchedTicketsContainer searchedTickets={searchedTickets} />) : 
              (<EmptyContainer />)
        }
        </section>
      </main>
      <Footer />
    </>
  );
}

const Loading = () => (
  <div className="sub_container flex_center w-full h-40">
    <SpinnerIcon className="size-10 text-secondary-foreground" />
  </div>
)

const EmptyContainer = () => (
  <div className="sub_container flex_center w-full h-40">
    <p>No tickets found.</p> 
  </div>
)

const SearchedTicketsContainer = ({searchedTickets}: {searchedTickets: any}) => {
  return (
    <div className="w-full flex_center justify-start space-y-7 flex-col">
      {searchedTickets.map((ticket: any) => (
        <div key={ticket.id} className="w-full max-w-screen-sm rounded-sm p-4 border">
          <h3>{ticket.full_name}</h3>
          <p>Email: {ticket.email}</p>
          <p>Ticket Code: {ticket.ticket_code}</p>
          <Link href={_ticket(ticket.id)}> view ticket detail</Link>
        </div>
      ))}
    </div>
  )
}