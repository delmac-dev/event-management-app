"use client";

import DialogFormWrapper from "@/components/common/dialog-form-wrapper";
import NewEventForm from "@/components/forms/new-event";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function NewEventModal({ isOpen=false }:{ isOpen?: boolean }) {
    const [open, setOpen] = useState(false);
    const title = "New Event";
    const description = "Start Your New Event";

    useEffect(() => {
        setOpen(isOpen);
      }, [isOpen]);

    return (
        <>
            <Button size="xs" onClick={() => setOpen(true)}>New Event</Button>
            <DialogFormWrapper 
                open={open} 
                setOpen={setOpen}
                title={title} 
                description={description}
                className="h-screen md:max-h-[720px] flex flex-col rounded-none border-t-8 border-secondary-foreground"
            >
                <NewEventForm onSubmitClick={()=>setOpen(false)} className="flex-1" />
            </DialogFormWrapper>
        </>
    )
}
