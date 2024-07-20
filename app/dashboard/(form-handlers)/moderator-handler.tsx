"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleModeratorForm from "@/components/forms/handle-moderator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type ModeratorHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string,
    eventID: string
}

export default function ModeratorHandler(props: ModeratorHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description, eventID } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Invite a moderator</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <HandleModeratorForm  eventID={eventID} closeHandler={()=>setOpen(false)} />
            </SheetFormWrapper>
        </>
    )
}