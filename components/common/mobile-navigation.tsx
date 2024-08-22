import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetOverlay, SheetPortal, SheetTrigger } from "../ui/sheet";
import React from "react";
import Link from "next/link";
import { cn, parseNavigation } from "@/lib/utils";
import { NavigationProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavigation({ navLinks, open, setOpen, children }:{ navLinks: any, open: boolean, setOpen: any, children?: React.ReactNode }) {
    const [content, setContent] = useState<NavigationProps[]>(navLinks);
    const pathname = usePathname();

    useEffect(()=> {
        setContent(parseNavigation(pathname, navLinks, true));
    }, [pathname]);

    return (
        <div className="block md:hidden px-3">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} size='sm' className="p-1">
                        <MenuIcon className="size-7" />
                    </Button>
                </SheetTrigger>
                <SheetPortal>
                    <SheetOverlay />
                    <SheetContent className="w-72 py-20 px-2">
                        <SheetClose className="absolute right-6 p-2 border top-6 rounded-full bg-background focus:outline-none shadow-md">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                        <div className="flex flex-col gap-2">
                            {content?.map((url:any, _i:number) => (
                                <Link 
                                    key={_i} 
                                    href={url.link} 
                                    onClick={() => setOpen(false)}
                                    className={cn("w-full rounded-sm p-2.5 capitalize", url.active? "bg-secondary": "hover:bg-secondary")}
                                >
                                    {url.name}
                                </Link>
                            ))}
                        </div>
                        {children}
                    </SheetContent>
                </SheetPortal>
            </Sheet>
        </div>
    )
};