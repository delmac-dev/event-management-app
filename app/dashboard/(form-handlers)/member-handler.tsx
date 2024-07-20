"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleMemberForm from "@/components/forms/handle-member";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type MemberHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string,
    orgID: string
}

export default function MemberHandler(props: MemberHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description, orgID } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Invite a member</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <HandleMemberForm orgID={orgID} closeHandler={()=>setOpen(false)} />
            </SheetFormWrapper>
        </>
    )
}