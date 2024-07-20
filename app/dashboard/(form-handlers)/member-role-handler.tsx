"use client";

import SheetFormWrapper from "@/components/common/sheet-form-wrapper";
import HandleMemberRoleForm from "@/components/forms/handle-member-role";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type MemberRoleHandlerProps = {
    isOpen: boolean,
    title: string,
    description?: string,
    orgID: string
}

export default function MemberRoleHandler(props: MemberRoleHandlerProps){
    const [open, setOpen] = useState(false);
    const { title, isOpen, description, orgID } = props;
    const wrapperData = { open, setOpen, title, description};

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return(
        <>
            <Button size="xs" onClick={() => setOpen(true)}>Add a role</Button>
            <SheetFormWrapper { ...wrapperData } className="">
                <HandleMemberRoleForm orgID={orgID} closeHandler={()=>setOpen(false)} />
            </SheetFormWrapper>
        </>
    )
}