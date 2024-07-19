"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type TicketHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string
}

export default function TicketHandler(props: TicketHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add a ticket</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <></>
            </SheetFormWrapper>
        </>
    )
}