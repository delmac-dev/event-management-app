import Header from "../(components)/header";
import { _event } from "@/lib/routes";
import EventsHeader from "../(components)/events-header";
import EevntsContainer from "../(components)/events-container";
import Footer from "../(components)/footer";

export const dynamic = 'force-dynamic';

export default async function Events() {
  return (
    <>
      <Header />
      <main className="main_container flex-1">
        <EventsHeader />
        <EevntsContainer />
      </main>
      <Footer />
    </>
  );
}