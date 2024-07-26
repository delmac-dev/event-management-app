"use client";

import { _ticket } from "@/lib/routes";
import Header from "../(components)/header";
import Footer from "../(components)/footer";
import { Input } from "@/components/ui/input";
import { Search, SquareArrowOutUpRight, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetSearchedTickets } from "@/lib/query-hooks";
import { useState } from "react";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SearchedTicketsProps } from "@/lib/types";

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
            (<Loading />) : search === "" ? null :
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

const SearchedTicketsContainer = ({ searchedTickets }: { searchedTickets: SearchedTicketsProps[] }) => {
  return (
    <div className="w-full flex_center flex-col space-y-7">
      {searchedTickets.map((ticket) => (<SearchedTicketCard {...ticket} />))}
    </div>
  );
};

const SearchedTicketCard = (props:SearchedTicketsProps) => {
  const { id, email, ticket_code, full_name} = props;
    
  return (
    <div key={id} className="w-full max-w-screen-sm p-4 border rounded-md bg-secondary/50 flex flex-start gap-3">
      <div className="size-10 rounded-sm bg-secondary border flex_center">
        <Ticket className="size-6" />
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground">{full_name}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-lg font-bold text-muted-foreground">{ticket_code}</p>
          <Link href={_ticket(id)} className="group hover:underline text-primary text-sm font-medium flex">
            View Ticket Details
            <SquareArrowOutUpRight className="text-muted-foreground group-hover:text-secondary-foreground size-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}