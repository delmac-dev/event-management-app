import { Button } from "@/components/ui/button";
import Footer from "../(components)/footer";
import Header from "../(components)/header";
import { ArrowRight, Bell, Calendar, CircleHelp, ClipboardList, Ticket } from "lucide-react";
import Faqs from "../(components)/faqs";
import Link from "next/link";
import { _dashboardEvents } from "@/lib/routes";
import { FAQS } from "@/lib/constants";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily create and customize events. Share them with everyone on campus to boost participation.",
  },
  {
    icon: ClipboardList,
    title: "Manage Events",
    description: "Keep track of all event details, schedules, and attendee lists in one place. Simplify event management.",
  },
  {
    icon: Ticket,
    title: "Book Tickets",
    description: "Browse events, book tickets, and join like-minded individuals for exciting campus activities.",
  },
  {
    icon: Bell,
    title: "Stay Informed",
    description: "Get real-time updates and notifications about events and activities happening on campus.",
  }
]

export const dynamic = 'force-dynamic';

export default async function Index() {

  return (
    <>
      <Header />
      <section className="main_container pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="sub_container flex flex-col items-center justify-start">
          <h1 className="mb-6 text-center text-3xl font-bold leading-snug text-foreground sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
            Event Ticketing & Management Made Easy
          </h1>
          <p className="mx-auto mb-9 max-w-prose text-base font-normal text-center text-secondary-foreground sm:text-lg sm:leading-[1.44]">
            Discover, create, and experience amazing events on campus with ease.
          </p>
          <Button className="group rounded-md h-auto bg-primary px-7 py-[14px] text-center text-base font-medium text-primary-foreground transition duration-300 ease-in-out hover:bg-primary/80 hover:text-body-color">
            <Link href={`${_dashboardEvents}?new=true`}>
              Start An Event Now 
            </Link>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <div className="w-full max-w-4xl rounded-t-xl rounded-tr-xl bg-secondary/10 aspect-video mt-16"></div>
        </div>
      </section>
      <section className="main_container pb-8 pt-20 bg-secondary lg:pb-[70px] lg:pt-[120px]">
        <div className="sub_container">
          <div className="mb-12 w-full text-center lg:mb-[70px] flex flex-col items-center">
            <span className="mb-2 block text-lg font-semibold text-muted-foreground">Features</span>
            <h2 className="mb-3 text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Main Features Of CampusEvents
            </h2>
          </div>
          <div className="-mx-4 grid grid-cols-1 md:grid-cols-2">
            {features.map((item, _id) =>(
              <div key={_id} className="w-full px-4">
                <div className="group mb-12">
                  <div className="relative z-0 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45" />
                    <item.icon className="size-9 text-primary-foreground" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mb-8 lg:mb-9 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="main_container py-16 px-4">
        <div className="sub_container">
          <div className="mb-12 w-full text-center lg:mb-[70px] flex flex-col items-center">
            <span className="mb-2 block text-lg font-semibold text-muted-foreground">FAQ</span>
            <h2 className="mb-3 text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Any Questions? Look Here
            </h2>
          </div>
          <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map(({ question, answer }, _id) => (
              <div key={_id} className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <CircleHelp className="size-9 text-primary-foreground" />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-secondary-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                    {question}
                  </h3>
                  <p className="text-base text-normal text-muted-foreground">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}