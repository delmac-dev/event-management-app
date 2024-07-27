import { _attendEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import EventDetailContainer from "../../(components)/event-detail-container";
import Footer from "../../(components)/footer";

export default async function Event({ params }: QueryProps) {
  const eventID = params.slug;

  return (
    <>
      <Header />
      <EventDetailContainer eventID={eventID} />
      <Footer />
    </>
  );
};