"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImageInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";
import { useGetProfile, useModifyProfile } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { useEffect } from "react";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import { _home } from "@/lib/routes";
import { deleteProfile } from "@/lib/queries";
import { signOut } from "@/lib/actions";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/lib/constants";
import { uploadFile } from "@/lib/supabase/upload-file";

const FormSchema = z.object({
    username: z.string().nullable(),
    full_name: z.string(),
    email: z.string().email(),
    avatar_url: z.any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "Please update or add new image.")
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),".jpg, .jpeg, .png and .webp files are accepted.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .or(z.string().min(1, "Field can't be an empty string"))
});

export type HandleProfile = z.infer<typeof FormSchema>;

export default function HandleProfileForm({className}:{className?: string}) {
    const { data: profile, isLoading } = useGetProfile();
    const { mutate: modifyProfile, isError, isSuccess, isPending } = useModifyProfile();
    const deleteHandlerData = {
        title: "Delete my profile",
        description: "All the events and a data associated with this profile will also be deleted along side the profile",
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

    async function onSubmit(data: HandleProfile) {
        let avatarUrl = data.avatar_url;

        if (avatarUrl instanceof File) 
            avatarUrl = await uploadFile(avatarUrl, 'organisation.avatars', profile?.id as string);

        const plainData = { ...data, avatar_url: avatarUrl };

        modifyProfile({ profileData: plainData, id: profile?.id as string});
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
                    <ImageInput name="avatar_url" label="Profile Picture" />
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