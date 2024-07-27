import { Button } from "@/components/ui/button";
import Footer from "../(components)/footer";
import Header from "../(components)/header";
import { ArrowRight, Box } from "lucide-react";
import Faqs from "../(components)/faqs";
import Link from "next/link";
import { _dashboardEvents } from "@/lib/routes";

const features = [
  {
    icon: null,
    feature: "Create and manage organisations with unlimited members having different roles",
  },
  {
    icon: null,
    feature: "Simply create, share and manage any private or public campus events",
  },
  {
    icon: null,
    feature: "Manage all event tickets and attendees with a user friendly dashboard",
  },
]

export default async function Index() {

  return (
    <>
      <Header />
      <section className="main_container py-20 lg:py-24">
        <div className="sub_container flex flex-col items-center justify-start">
          <h1 className="text-accent-foreground max-w-md text-4xl md:text-4xl leading-normal font-bold tracking-tight text-center">
            Event Ticketing & Management Made Easy
          </h1>
          <p className="max-w-prose text-sm font-normal text-muted-foreground mt-4 lg:mt-7 text-center">
            Effortlessly manage and participate in campus events with our intuitive and comprehensive platform, simplifying the process of organizing, promoting, and attending events all in one convenient place.
          </p>
          <Button size="xs" className="group mt-7">
            <Link href={`${_dashboardEvents}?new=true`}>
              Start An Event Now
            </Link>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <div className="w-full max-w-2xl rounded-lg bg-secondary aspect-video mt-7"></div>
        </div>
      </section>
      <section className="main_container py-10">
        <div className="sub_container">
          <h1 className="font-medium text-xl text-center">Available Features</h1>
          <div className="w-full mt-7 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon, feature }, _id) => (
              <div key={_id} className="w-full border p-6 flex flex-col items-start">
                <Box className="size-8 text-secondary-foreground" />
                <p className="font-normal text-sm tracking-wide mt-4 text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="main_container py-16">
        <div className="sub_container">
          <h1 className="font-medium text-xl text-center">Have Any Question About CampusEvents?</h1>
          <div className="w-full mt-7 flex_center">
            <Faqs />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}