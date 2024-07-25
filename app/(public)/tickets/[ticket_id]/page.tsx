"use client";

import { FetchedPublicAttendeesProps, QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import { useGetPublicTicket } from "@/lib/query-hooks";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { convertTo12HourFormat, formatDate } from "@/lib/utils";
import Footer from "../../(components)/footer";

export default function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;
  const { data:attendee, isLoading } = useGetPublicTicket(ticketID);

  return (
    <>
      <Header />
      <main className="main_container py-12">
        {isLoading?
          (<Loading />):
          (<TicketDetail attendee={attendee as FetchedPublicAttendeesProps} />)
        }
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

const TicketDetail = ({attendee}:{attendee: FetchedPublicAttendeesProps}) => {
  const { full_name, email, ticket_code, tickets } = attendee;
  const { name, events } = tickets;
  const { id, headline, banner, event_date, start_at } = events;

  return (
    <>
      <section className="sub_container mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Ticket Details</h1>
      </section>
      <section className="sub_container bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Ticket Holder Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg text-gray-600">Full Name:</p>
            <p className="text-xl font-bold text-gray-800">{full_name}</p>
          </div>
          <div>
            <p className="text-lg text-gray-600">Email:</p>
            <p className="text-xl font-bold text-gray-800">{email}</p>
          </div>
          <div>
            <p className="text-lg text-gray-600">Ticket Code:</p>
            <p className="text-xl font-bold text-gray-800">{ticket_code}</p>
          </div>
        </div>
      </section>
      <section className="sub_container bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Event Information</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={banner} alt={name} className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-lg text-gray-600 mb-2">Event Name:</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h3>
            <p className="text-lg text-gray-600 mb-2">Headline:</p>
            <p className="text-xl text-gray-800 mb-4">{headline}</p>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <p className="text-lg text-gray-600 mb-2">Date:</p>
                <p className="text-xl font-semibold text-gray-800">{formatDate(event_date)}</p>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-600 mb-2">Time:</p>
                <p className="text-xl font-semibold text-gray-800">{convertTo12HourFormat(start_at)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}