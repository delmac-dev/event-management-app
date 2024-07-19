"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type AttendeeHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string
}

export default function AttendeeHandler(props: AttendeeHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add an attendee</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <></>
            </SheetFormWrapper>
        </>
    )
}