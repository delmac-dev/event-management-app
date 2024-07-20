"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

type DeleteHandlerProps = {
    title: string,
    description: string,
    buttonText: string,
    deleteAction: () => any,
    redirectTo: string,
    queryKey: string[]
}

export default function DeleteHandler (props: DeleteHandlerProps) {
    const { title, description, buttonText, deleteAction, queryKey } = props;

    const handleClick = async () => {
        // delete function
        // show toast
        // redirect to redirectTo
    }

    return (
        <div className="w-full rounded-lg border flex p-7 border-destructive/80 bg-destructive/5 gap-4">
            <div className="w-8 h-8 flex_center bg-destructive rounded-sm">
                <TriangleAlert className="size-4 text-destructive-foreground" />
            </div>
            <div className="flex-1 flex flex-col items-start">
                <h4 className="text-base font-medium text-foreground mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground text-left text-wrap mb-4">{description}</p>
                <Button variant='destructive' size='xs' onClick={handleClick}>{buttonText}</Button>
            </div>
        </div>
    )
}