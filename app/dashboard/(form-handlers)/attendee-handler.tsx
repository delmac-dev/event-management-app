"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleAttendeeForm from "@/components/forms/handle-attendee";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type AttendeeHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string,
    eventID: string,
}

export default function AttendeeHandler(props: AttendeeHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description, eventID } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add an attendee</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <HandleAttendeeForm closeHandler={() => setOpen(false)} eventID={eventID} />
            </SheetFormWrapper>
        </>
    )
}