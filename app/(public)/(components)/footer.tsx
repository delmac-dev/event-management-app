import Logo from "@/components/common/logo";
import { _dashboard, _dashboardTickets, _events, _tickets } from "@/lib/routes";
import Link from "next/link";

const footerLinks = [
    {
        title: "explore",
        links: [
            {name: "find events", link: _events},
            {name: "start an event", link: _dashboard},
            {name: "all your tickets", link: _dashboardTickets},
            {name: "find my ticket", link: _tickets},
        ]
    },
    {
        title: "company",
        links: [
            {name: "about", link: "/"},
            {name: "team", link: "/"},
            {name: "pricing", link: "/"},
            {name: "faq", link: "/"},
        ]
    },
    {
        title: "legal",
        links: [
            {name: "privacy policy", link: "/"},
            {name: "terms", link: "/"},
            {name: "cookies", link: "/"},
        ]
    },
]

const Footer = () => {
  return ( 
    <footer className="main_container py-20 px-4 border-t">
        <section className="sub_container mx-auto flex items-start md:flex-row flex-col-reverse gap-8">
            <div className="w-full max-w-sm">
                <div className="flex items-center gap-1 mb-2.5">
                    <Logo />
                    <p className="text-sm font-medium">CampusEvents</p>
                </div>
                <p className="text-sm text-muted-foreground leading-loose max-w-72">Create, promote, and ticket your events in one place</p>
            </div>
            <div className="max-lg:w-full flex-1 grid grid-cols-1 sm:grid-cols-3 gap-7 md:gap-4 ">
                {footerLinks.map(({title, links}, _id) => (
                    <div key={_id} className="">
                        <h5 className="text-sm font-medium text-accent-foreground capitalize tracking-wide mb-1.5">{title}</h5>
                        <ul className="flex flex-col gap-1">
                            {links.map(({ name, link }, _i) => (
                                <li key={_i}>
                                    <Link href={link} className="capitalize text-xs font-normal hover:underline underline-offset-2">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    </footer>
  )
}

export default Footer