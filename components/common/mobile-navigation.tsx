import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetOverlay, SheetPortal, SheetTrigger } from "../ui/sheet";
import React from "react";
import Link from "next/link";

export default function MobileNavigation({ navLinks, open, setOpen, children }:{ navLinks: any, open: boolean, setOpen: any, children?: React.ReactNode }) {

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
                    <SheetContent className="w-80 py-20">
                        <SheetClose className="absolute left-0 -translate-x-1/2 p-2 top-6 rounded-full bg-background focus:outline-none shadow-md">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                        <div className="flex flex-col gap-2">
                            {navLinks?.map((url:any, _i:number) => (
                                <Link 
                                    key={_i} 
                                    href={url.link} 
                                    onClick={() => setOpen(false)}
                                    className="w-full rounded-sm p-2.5 hover:bg-secondary capitalize"
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