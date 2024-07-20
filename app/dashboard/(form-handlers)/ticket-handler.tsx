"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleTicketForm from "@/components/forms/handle-ticket";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type TicketHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string,
    eventID: string
}

export default function TicketHandler(props: TicketHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description, eventID } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add a ticket</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <HandleTicketForm eventID={eventID} closeHandler={()=> setOpen(false)} />
            </SheetFormWrapper>
        </>
    )
}