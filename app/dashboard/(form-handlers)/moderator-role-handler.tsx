"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type ModeratorRoleHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string
}

export default function ModeratorRoleHandler(props: ModeratorRoleHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add a role</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <></>
            </SheetFormWrapper>
        </>
    )
}