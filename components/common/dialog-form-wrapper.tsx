"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
            <DialogContent  className={cn("w-full max-w-screen-md py-7 px-3.5 sm:px-7", className)}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (<DialogDescription>{description}</DialogDescription>)}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
