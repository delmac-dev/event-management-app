"use client";

import { _ticket } from "@/lib/routes";
import Header from "../(components)/header";
import Footer from "../(components)/footer";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Scroll, Search, Ticket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetSearchedTickets } from "@/lib/query-hooks";
import { useState } from "react";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { CardDescription, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FormSchema = z.object({
  query: z.string().min(1, "Must enter a query"),
})

export type QueryTicket = z.infer<typeof FormSchema>;

export default function Tickets() {
  const [search, setSearch] = useState("");
  const { data: searchedTickets, isLoading } = useGetSearchedTickets(search);

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
            <Input className="text-base" placeholder="Enter email or ticketCode" {...register("query")} />
            <Button type="submit" className="">
              <Search className="size-5" />
            </Button>
          </form>
        </section>
        <section className="sub_container py-0">
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

const SearchedTicketsContainer = ({ searchedTickets }: { searchedTickets: any }) => {
  return (
    <>
      <ScrollArea className="mt-0 lg:max-w-[calc(100vw-40rem)] max-w-[calc(100vw-2rem)]">
        <div className="w-full flex py-2 justify-start">
          {searchedTickets.map((ticket: any) => (
            <div key={ticket.id} className="w-60  mx-4 bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative">
              {/* Semi-circles on sides */}
              <div className="absolute left-0 top-1/2 w-5 h-10 rounded-r-full shadow-inner mt-1  bg-gray-100"></div>
              <div className="absolute right-0 top-1/2 w-5 h-10 rounded-l-full shadow-inner mt-1 bg-gray-100"></div>

              <div className="relative h-48">
                <Image
                  src={ticket.banner}
                  alt="Event image"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl text-center font-medium mb-4 truncate font-roboto-mono ">{ticket.full_name}</h2>

                <div className="">
                  <div className="flex flex-col items-center justify-center">
                    <CardDescription className="font-light font-roboto-mono text-center border-b border-t border-dashed border-gray-600 mb-2">
                      {new Date(`${ticket.event_date}T${ticket.start_at}`).toLocaleDateString('en-US', {
                        weekday: 'short',  month: 'short', day: 'numeric'
                      })} | {new Date(`${ticket.event_date}T${ticket.start_at}`).toLocaleTimeString('en-US', {
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </CardDescription>
                  </div>
                </div>

                <div className="mb-4">
                  <CardDescription className="font-medium font-roboto-mono text-blue-600 text-center truncate">{ticket.name}</CardDescription>
                </div>

                <div className="mt-4">
                  <Link href={_ticket(ticket.id)}>
                    <Button className="w-full rounded-lg font-roboto-mono bg-teal-500 text-white" variant={"default"}>View Ticket</Button>

                  </Link>
                  <p className="text-center text-sm font-light mt-1"># <span className=" font-roboto-mono font-semibold">{ticket.ticket_code}</span></p>
                </div>
              </div>
            </div>

          ))}
        </div>
        <ScrollBar orientation="horizontal" />


      </ScrollArea>
    </>

  )
}