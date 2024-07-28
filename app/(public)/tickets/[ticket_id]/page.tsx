"use client";

import { FetchedPublicAttendeesProps, QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import { useGetPublicTicket } from "@/lib/query-hooks";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { cn, convertTo12HourFormat, formatDate } from "@/lib/utils";
import Footer from "../../(components)/footer";
import Image from "next/image";
import QRCodeGenerator from "../../(components)/qrcode-generator";

export default function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;
  const { data:attendee, isLoading } = useGetPublicTicket(ticketID);
  console.log({attendee});
  
  return (
    <>
      <Header />
      <main className="main_container flex-1 px-4">
        <section className="sub_container py-7 flex_center justify-between">
          <h1 className="text-xl font-medium uppercase text-secondary-foreground">Ticket Details</h1>
        </section>
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
  const { name: ticketName, events } = tickets;
  const { id, name, headline, banner, event_date, start_at } = events;

  return (
    <>
      <TicketDetailComponent header="Ticket Holder Information">
        <div className="w-full flex gap-6 md:gap-4 flex-col md:flex-row">
          <div className="flex-1 grid grid-cols-2 gap-6">
            <DetailCard header="Full Name" value={full_name} className="overflow-hidden truncate" />
            <DetailCard header="Email" value={email} />
            <DetailCard header="Ticket Code" value={ticket_code} />
            <DetailCard header="Ticket Name" value={ticketName} />
          </div>
          <div className="flex-1 h-full flex_center justify-start md:justify-center">
            <QRCodeGenerator value={ticket_code} size={200} />
          </div>
        </div>
      </TicketDetailComponent>
      <TicketDetailComponent header="Event Information">
        <div className="w-full flex gap-6 md:gap-4 flex-col md:flex-row">
          <div className="flex-1 aspect-video relative z-0 overflow-hidden">
            <Image src={banner} alt={name} fill className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex-1 space-y-4">
            <DetailCard header="Event Name" value={name} />
            <DetailCard header="Headline" value={headline} />
            <DetailCard header="Event Date" value={formatDate(event_date)} />
            <DetailCard header="Event Time" value={convertTo12HourFormat(start_at)} />
          </div>
        </div>
      </TicketDetailComponent>
    </>
  )
}

const TicketDetailComponent = ({header, children}:{header: string, children: React.ReactNode}) => (
  <section className="sub_container bg-secondary/60 border rounded-lg p-6 mb-6 space-y-10 h-auto">
    <h2 className="text-xl font-medium text-secondary-foreground mb-4">{header}</h2>
    {children}
  </section>
)

const DetailCard = ({header, value, className}:{header: string, value: string, className?: string}) => (
  <div className="space-y-1.5">
    <p className="text-base text-muted-foreground">{header}</p>
    <p className={cn("text-sm font-semibold text-secondary-foreground", className)}>{value}</p>
  </div>
)