import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SelectUserInput, SwitchInput, TextInput } from "../common/custom-form-fields";
import { useModifyMember, useSetMember } from "@/lib/query-hooks";
import { useEffect, useState } from "react";
import SpinnerIcon from "../icons/spinner-icon";
import { FetchedMembersProps } from "@/lib/types";

const FormSchema = z.object({
    user_id: z.string().min(1),
    organisation_id: z.string().min(1),
    is_active: z.boolean(),
});

export type HandleMember = z.infer<typeof FormSchema>;
export type HandleMemberFormProps = {
    orgID: string,
    member?: FetchedMembersProps,
    className?: string,
    closeHandler: ()=>void
}

export default function HandleMemberForm(props:HandleMemberFormProps) {
    const {orgID, member, closeHandler, className} = props;
    const { mutate: setMember, isError: isSetError, isSuccess: isSetSuccess, isPending: isSetPending } = useSetMember(orgID);
    const { mutate: modifyMember, isError: isModifyError, isSuccess: isModifySuccess, isPending: isModifyPending} = useModifyMember(orgID);

    const defaultValues = {
        is_active: member?.is_active || false,
        organisation_id: orgID,
        user_id: member?.profiles.email || "",
    }

    const form = useForm<HandleMember>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isDirty, isSubmitting }} = form;

    function onSubmit(data: HandleMember) {
        member ? 
            modifyMember({memberData: data, id: member.id}):
            setMember({ memberData: data });
    };

    useEffect(() => {
        if (isSetError) {
            toast.error("Error occurred inviting member");
        };

        if (isSetSuccess) {
            toast.success("Member invited successfully");
            closeHandler();
        }

        if (isModifyError) {
            toast.error("Error occurred editting a member");
        };

        if (isModifySuccess) {
            toast.success("Member editted successfully");
            closeHandler();
        }

    }, [isSetError, isSetSuccess, isModifyError, isModifySuccess]);

    useEffect(() => {
        if (member) reset(defaultValues);
    }, [member, reset]);

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-6 overflow-auto p-4">
                    {!member && (<SelectUserInput name="user_id" label="User" />)}
                    {member && (<TextInput name="user_id" label="User" disabled />)}
                    <SwitchInput name="is_active" label="Active Status" disabled={!member || !member.has_accepted} />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isSetPending || isModifyPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={!isDirty || isSubmitting || isSetPending || isModifyPending}>
                        {   
                            (isSubmitting || isSetPending || isModifyPending ) && 
                            (<SpinnerIcon className="size-8 text-primary-foreground" />)
                        }
                        {member ? "Edit Member" : "Invite Member"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}