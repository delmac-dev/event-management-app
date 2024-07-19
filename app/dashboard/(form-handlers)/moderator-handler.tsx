"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type ModeratorHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string
}

export default function ModeratorHandler(props: ModeratorHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add a moderator</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <></>
            </SheetFormWrapper>
        </>
    )
}