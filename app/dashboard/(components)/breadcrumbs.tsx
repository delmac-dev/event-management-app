"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetPortal, SheetTrigger } from "@/components/ui/sheet";
import { BreadcrumbProps, PanelProps, } from "@/lib/types";
import { PanelLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Panel from "./panel";
import { usePathname } from "next/navigation";
import { getPathSegments } from "@/lib/utils";

export default function Breadcrumbs({panel}: { panel?: PanelProps[] }){
    const pathname = usePathname();
    const content = getPathSegments(pathname);
    content.shift();
    return (
        <section className="section py-0 h-9 flex_center justify-start px-2">
            {panel? <PanelWrapper panel={panel} /> : ''}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                    {content.map(({name, link}, _id) => (
                        <React.Fragment key={_id}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {link ? (
                                    <BreadcrumbLink asChild>
                                        <Link href={link}>{ name }</Link>
                                    </BreadcrumbLink>
                                ): (
                                    <BreadcrumbPage>{ name }</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    )
}

const PanelWrapper = ({ panel }: { panel: PanelProps[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden pr-2 flex_center">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} size='sm' className="p-1">
                        <PanelLeft size={20} />
                    </Button>
                </SheetTrigger>
                <SheetPortal>
                    <SheetContent className="h-[calc(100vh-56px)] top-14 w-56 py-7 px-2 shadow-none border-r" side="left">
                        <SheetClose className="absolute right-0 translate-x-1/2 p-2 top-6 rounded-full bg-background focus:outline-none shadow-md">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                        <Panel panel={panel} onClick = {() => setOpen(false)}/>
                    </SheetContent>
                </SheetPortal>
            </Sheet>
        </div>
    )
};