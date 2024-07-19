"use client";

import DialogFormWrapper from "@/components/common/dialog-form-wrapper";
import NewOrganisationForm from "@/components/forms/new-organisation";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export default function NewOrganisationHandler({ isOpen }:{ isOpen: boolean }) {
    const [open, setOpen] = useState(false);
    const title = "New Organisation";
    const description = "Create your own organisation";

    useEffect(() => {
        setOpen(isOpen);
      }, [isOpen]);

    return (
        <>
            <Button size="xs" onClick={() => setOpen(true)}>New Organisation</Button>
            <DialogFormWrapper 
                open={open} 
                setOpen={setOpen}
                title={title} 
                description={description}
            >
                <NewOrganisationForm closeDialog={()=> setOpen(false)} />
            </DialogFormWrapper>
        </>
    )
}
