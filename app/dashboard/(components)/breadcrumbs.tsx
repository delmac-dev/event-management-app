"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetPortal, SheetTrigger } from "@/components/ui/sheet";
import { BreadcrumbProps, PanelProps, } from "@/lib/types";
import { PanelLeft, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumbs({panel, content}: { panel?: PanelProps[], content: BreadcrumbProps[]}){
    return (
        <section className="w-full max-w-8xl h-9 flex_center justify-start lg:px-2">
            {panel? <Panel panel={panel} /> : ''}
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
                                        <Link href="/">{ name }</Link>
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

const Panel = ({ panel }: { panel: PanelProps[] }) => {

    return (
        <div className="lg:hidden px-2 flex_center">
            <Sheet>
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
                        <div className="flex flex-col gap-0.5">
                            {panel?.map(({name, link}, _i) => (
                                <Link key={_i} href={link} className="w-full rounded-sm p-2.5 text-sm hover:bg-secondary capitalize">{name}</Link>
                            ))}
                        </div>
                    </SheetContent>
                </SheetPortal>
            </Sheet>
        </div>
    )
};