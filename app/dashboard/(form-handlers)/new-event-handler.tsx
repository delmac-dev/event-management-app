"use client";

import DialogFormWrapper from "@/components/common/dialog-form-wrapper";
import NewEventForm from "@/components/forms/new-event";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

type NewEventHandlerProps = { 
    isOpen?: boolean, 
    organisationID?: string 
};

export default function NewEventHandler({ isOpen=false, organisationID }: NewEventHandlerProps) {
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
            >
                <NewEventForm closeHandler={()=>setOpen(false)} organisationID={organisationID} />
            </DialogFormWrapper>
        </>
    )
}
