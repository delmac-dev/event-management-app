"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction} from "react";

type DialogFormWrapperProps = {
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>,
    title: string,
    description: string,
    className?: string,
    children: React.ReactNode
}

export default function DialogFormWrapper(props:DialogFormWrapperProps) {
    const {open, setOpen, title, description, className, children} = props;

    return (
        <Dialog open = {open} onOpenChange={setOpen}>
            <DialogOverlay className="bg-transparent backdrop-blur-none" />
            <DialogContent  className={cn("isolate w-full max-w-screen-md p-0 overflow-auto h-dvh md:max-h-[720px] flex flex-col border-transparent border-t-8 border-t-secondary-foreground", className)}>
                <DialogHeader className="sticky top-0 right-0 z-50 p-4 bg-background">
                    <DialogTitle>{title}</DialogTitle>
                    {description && (<DialogDescription>{description}</DialogDescription>)}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
