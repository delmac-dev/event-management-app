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
            <SheetContent className={cn("flex flex-col w-full sm:w-96", className)}>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    {description && (<SheetDescription>{description}</SheetDescription>)}
                </SheetHeader>
                <div className="w-full flex-1">
                    {children}
                </div>
            </SheetContent>
        </Sheet>
    )
}