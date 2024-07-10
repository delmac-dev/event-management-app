import Logo from "@/components/common/logo";
import { _dashboard, _dashboardTickets, _events, _tickets } from "@/lib/routes";
import Link from "next/link";

const footerLinks = [
    {
        title: "explore",
        links: [
            {name: "find events", link: _events},
            {name: "start an event", link: _dashboard},
            {name: "create an organisation", link: _dashboard},
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
    <footer className="main_container py-8 px-4 border-t">
        <div className="w-full max-w-screen-xl mx-auto flex items-start lg:flex-row flex-col-reverse gap-8 lg:gap-24">
            <div className="w-full max-w-md">
                <div className="flex items-center gap-2 mb-1">
                    <Logo />
                    <p className="text-sm font-semibold">CampusEvents</p>
                </div>
                <p className="text-sm text-secondary-foreground">Create, promote, and ticket your events in one place</p>
            </div>
            <div className="max-lg:w-full flex-1 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7 md:gap-4 ">
                {footerLinks.map(({title, links}, _id) => (
                    <div key={_id} className="">
                        <h5 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide mb-1.5">{title}</h5>
                        <ul className="flex flex-col gap-1">
                            {links.map(({ name, link }, _i) => (
                                <li key={_i}>
                                    <Link href={link} className="capitalize text-sm font-normal hover:underline underline-offset-2">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer