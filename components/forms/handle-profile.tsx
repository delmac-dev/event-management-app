"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";
import { useGetProfile, useModifyProfile } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { useEffect } from "react";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import { _home } from "@/lib/routes";
import { deleteProfile } from "@/lib/queries";
import { signOut } from "@/lib/actions";
import { dashboardKeys } from "@/lib/query-keys";

const FormSchema = z.object({
    username: z.string().nullable(),
    full_name: z.string(),
    email: z.string().email(),
    avatar_url: z.string().nullable()
});

export type HandleProfile = z.infer<typeof FormSchema>;

export default function HandleProfileForm({className}:{className?: string}) {
    const { data: profile, isLoading } = useGetProfile();
    const { mutate: modifyProfile, isError, isSuccess, isPending } = useModifyProfile();
    const deleteHandlerData = {
        title: "Delete my profile",
        description: "All the events and a data associated with this organisation will also be deleted along side the organisation",
        buttonText: "Delete Profile",
        toastMessage: "Profile deleted successfully",
        redirectTo: _home
    }

    const form = useForm<HandleProfile>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            full_name: '',
            email: '',
            avatar_url: '',
        },
    });

    const {handleSubmit, reset, formState: { isDirty }} = form;

    function onSubmit(data: HandleProfile) {
        modifyProfile({ profileData: data, id: profile?.id as string});
    };

    const handleProfileDelete = async () => {
        const data = await deleteProfile({id: profile?.id as string});
        await signOut(false);

        return data;
    }

    useEffect(() => {
        if (profile) {
          reset({
            username: profile.username,
            full_name: profile.full_name,
            email: profile.email,
            avatar_url: profile.avatar_url,
          });
        }
    }, [profile, reset]);

    useEffect(() => {
        if (isError) toast.error("Error occurred editing profile", { position: "top-right" });

        if (isSuccess) toast.success("Profile edited successfully", { position: "top-right" });

    }, [isError, isSuccess]);

    if(isLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-7 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                    <TextInput name="username" label="Username" />
                    <TextInput name="full_name" label="Full Name" />
                    <TextInput name="email" label="Email" disabled />
                    <TextInput name="avatar_url" label="Profile Picture" />
                    <div className="w-full flex justify-end gap-3">
                        <Button size='xs' disabled={isPending || !isDirty}>
                            {isPending && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>
            <DeleteHandler { ...deleteHandlerData } deleteAction={handleProfileDelete} />
        </>
    )
}