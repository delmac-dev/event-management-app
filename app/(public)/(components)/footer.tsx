"use client";

import Logo from "@/components/common/logo";
import { _dashboard, _dashboardTickets, _events, _tickets, _about, _terms, _cookies } from "@/lib/routes";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetClose, SheetFooter, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Cookie } from "lucide-react";

const footerLinks = [
    {
        title: "explore",
        links: [
            { name: "find events", link: _events },
            { name: "start an event", link: _dashboard },
            { name: "all your tickets", link: _dashboardTickets },
            { name: "find my ticket", link: _tickets },
        ]
    },
    {
        title: "company",
        links: [
            { name: "about", link: _about },
            { name: "team", link: `${_about}#team-section` },
            { name: "pricing", link: "/pricing" },
            { name: "faq", link: `${_about}#faq-section` },
        ]
    },
    {
        title: "legal",
        links: [
            { name: "privacy policy", link: `${_terms}#privacy-policy` },
            { name: "terms", link: _terms },
            { name: "cookies", link: _cookies },
        ]
    },
]

const Footer = () => {
    const [open, setOpen] = useState(false)

    return (
        <footer className="main_container py-20 px-4 border-t">
            <section className="sub_container mx-auto flex items-start md:flex-row flex-col-reverse gap-8">
                <div className="w-full max-w-sm">
                    <div className="flex items-center gap-1 mb-2.5">
                        <Logo className="size-9" />
                        <p className="text-base md:text-lg font-medium">CampusEvents</p>
                    </div>
                    <p className="text-base text-muted-foreground leading-loose max-w-72">Create, promote, and ticket your events in one place</p>
                </div>
                <div className="max-lg:w-full flex-1 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-4 ">
                    {footerLinks.map(({ title, links }, _id) => (
                        <div key={_id} className="">
                            <h5 className="mb-9 text-lg font-semibold text-accent-foreground capitalize tracking-wide">{title}</h5>
                            <ul className="flex flex-col gap-1">
                                {links.map(({ name, link }, _i) => (
                                    <li key={_i}>
                                        {name === "cookies" ?
                                            (
                                                <Button variant="link" onClick={() => setOpen(true)} className="p-0 h-auto text-muted-foreground capitalize mb-4 text-base font-normal hover:underline underline-offset-2">
                                                    {name}
                                                </Button>
                                            ) : (
                                                <Link href={link} className="capitalize mb-4 text-base font-normal text-muted-foreground hover:underline underline-offset-2">
                                                    {name}
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <CookiesSheet open={open} setOpen={setOpen} />
        </footer>
    )
}


const CookiesSheet = ({ open, setOpen }: any) => (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="h-[250px]">
            <SheetHeader>
                <div className="flex justify-between items-center">

                    <Cookie className="size-8 text-purple-500" />
                    <SheetClose asChild>
                        <button type="button" onClick={() => setOpen(false)} className="text-lg">
                            &#x2715; 
                        </button>
                    </SheetClose>

                </div>
                <SheetDescription className="text-center mt-11">
                    We Use Third Party Cookies in order to personalize your site experience.
                </SheetDescription>
            </SheetHeader>
            <SheetFooter>
            </SheetFooter>
        </SheetContent>
    </Sheet>
);

export default Footer;