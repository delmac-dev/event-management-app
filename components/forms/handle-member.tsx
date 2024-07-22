import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SelectUserInput, SwitchInput } from "../common/custom-form-fields";
import { useGetMemberByID, useSetMember } from "@/lib/query-hooks";
import { useEffect, useState } from "react";
import SpinnerIcon from "../icons/spinner-icon";

const FormSchema = z.object({
    user_id: z.string().min(1),
    organisation_id: z.string().min(1),
    is_active: z.boolean(),
});

export type HandleMember = z.infer<typeof FormSchema>;
export type HandleMemberFormProps = {
    orgID: string,
    memberID?: string,
    className?: string,
    closeHandler: ()=>void
}

export default function HandleMemberForm(props:HandleMemberFormProps) {
    const {orgID, memberID, closeHandler, className} = props
    const [shouldFetch, setShouldFetch] = useState(false);

    const { data: member, isLoading } = shouldFetch ? useGetMemberByID(memberID as string, orgID) : { data: null, isLoading: false };
    const { mutate: setMember, isError, isSuccess, isPending } = useSetMember(orgID);

    const defaultValues = {
        is_active: member?.is_active || false,
        organisation_id: orgID,
        user_id: member?.user.value || "",
    }

    const form = useForm<HandleMember>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isDirty, isSubmitting }} = form;

    function onSubmit(data: HandleMember) {
        setMember({ memberData: data });
    };

    useEffect(() => {
        if (memberID)
          setShouldFetch(true);
      }, [memberID]);

    useEffect(() => {
        if (isError) {
            toast.error("Error occurred invitng member");
        };

        if (isSuccess) {
            toast.success("Member invited successfully");
            closeHandler();
        }

    }, [isError, isSuccess]);

    useEffect(() => {
        if (member) reset(defaultValues);
    }, [member, reset]);

    if(isLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-6 overflow-auto p-4">
                    <SelectUserInput name="user_id" label="User" />
                    <SwitchInput name="is_active" label="Active Status" disabled={!memberID} />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={!isDirty || isSubmitting || isPending}>
                        {(isSubmitting || isPending) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                        Invite Member
                    </Button>
                </div>
            </form>
        </Form>
    )
}