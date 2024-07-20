"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetOverlay, SheetTitle } from "@/components/ui/sheet";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

type SheetFormWrapperProps = {
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>,
    title: string,
    description?: string,
    className?: string,
    children: React.ReactNode
}

export default function SheetFormWrapper(props: SheetFormWrapperProps) {
    const { open, setOpen, title, description, className, children } = props;
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetOverlay className="bg-transparent backdrop-blur-none" />
            <SheetContent className={cn("flex flex-col gap-0 w-full sm:max-w-md p-0 overflow-auto", className)}>
                <SheetHeader className="sticky top-0 right-0 z-50 p-4 bg-background">
                    <SheetTitle className="font-medium">{title}</SheetTitle>
                    {description && (<SheetDescription>{description}</SheetDescription>)}
                </SheetHeader>
                {children}
            </SheetContent>
        </Sheet>
    )
}