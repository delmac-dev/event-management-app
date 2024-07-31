"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImageInput, SelectInput, TextInput } from "../common/custom-form-fields";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, ORGANISATION_CATEGORIES } from "@/lib/constants";
import { Button } from "../ui/button";
import { useGetOrganisationByID, useModifyOrganisation } from "@/lib/query-hooks";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import { _dashboardOrgs } from "@/lib/routes";
import { deleteOrganisation} from "@/lib/queries";
import { useEffect } from "react";
import { uploadFile } from "@/lib/supabase/upload-file";
import SpinnerIcon from "../icons/spinner-icon";
import { createClient } from "@/lib/supabase/client";

const ModifyOrgFormSchema = z.object({
    name: z.string(),
    headline: z.string().nullable(),
    about: z.string().nullable(),
    category: z.string(),
    owner: z.string(),
    avatar_url: z.any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "Please update or add new image.")
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),".jpg, .jpeg, .png and .webp files are accepted.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .or(z.string().min(1, "Field can't be an empty string"))

});

export type ModifyOrganisation = z.infer<typeof ModifyOrgFormSchema>;

export function ModifyOrganisationForm({orgID, className}:{orgID: string, className?: string}) {
    const { data: organisation, isLoading } = useGetOrganisationByID(orgID);
    const { mutate: modifyOrganisation, isError, isSuccess, isPending } = useModifyOrganisation(orgID);
    const deleteHandlerData = {
        title: "Delete this organisation",
        description: "All the events and a data associated with this organisation will also be deleted along side the organisation",
        buttonText: "Delete Organisation",
        toastMessage: "Organisation deleted successfully",
        redirectTo: _dashboardOrgs,
      }
    
      const defaultValues= {
        name: organisation?.name || '',
        headline: organisation?.headline || '',
        about: organisation?.about || '',
        category: organisation?.category || '',
        avatar_url: organisation?.avatar_url || '',
        owner: organisation?.profiles?.full_name || ''
    }

    const form = useForm<ModifyOrganisation>({
        resolver: zodResolver(ModifyOrgFormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isSubmitting, isDirty }} = form;

    async function onSubmit(data: ModifyOrganisation) {
        let avatarUrl = data.avatar_url;

        if (avatarUrl instanceof File) 
            avatarUrl = await uploadFile(avatarUrl, 'organisation.avatars', data.name);

        const plainData = {...data, avatar_url: avatarUrl, owner: organisation?.owner as string};

        modifyOrganisation({ orgData: plainData, id: orgID});
    };

    const handleOrgDelete = async () => {
        await deleteOrganisation({id: orgID});
    }

    useEffect(() => {
        if (organisation)
            reset(defaultValues);
    }, [organisation, reset]);

    useEffect(() => {
        if (isError) toast.error("Error occurred editing organisation");

        if (isSuccess) toast.success("Organisation edited successfully");

    }, [isError, isSuccess]);

    if(isLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }


    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                    <TextInput name="name" label="Name" />
                    <TextInput name="headline" label="Headline" />
                    <SelectInput name="category" label="Category" defaultvalue={organisation?.category} placeHolder="Select a Category" list={ORGANISATION_CATEGORIES} />
                    <TextInput name="owner" label="Organisation Owner" disabled />
                    <ImageInput name="avatar_url" label="Organisation Avatar" />
                    <div className="w-full flex justify-end">
                        <Button size='xs' disabled={isSubmitting || isPending || !isDirty}>
                            {(isPending || isSubmitting) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>
            <DeleteHandler { ...deleteHandlerData } deleteAction={handleOrgDelete}/>
        </>
    )
}