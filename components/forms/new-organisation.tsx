import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImageInput, SelectInput, TextareaInput, TextInput } from "@/components/common/custom-form-fields";
import { Button } from "../ui/button";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, orgCategories } from "@/lib/constants";
import { useSetOrganisation } from "@/lib/query-hooks";
import { useEffect } from "react";
import SpinnerIcon from "../icons/spinner-icon";
import { uploadFile } from "@/lib/supabase/upload-file";

const FormSchema = z.object({
    name: z.string().min(1, "Must enter erganisation name"),
    headline: z.string(),
    category: z.string().min(1, "Must select a category"),
    about: z.string(),
    avatar_url: z.any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "Please update or add new image.")
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),".jpg, .jpeg, .png and .webp files are accepted.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`).or(z.string().min(1, "field can't be an empty string"))
});

export type NewOrganisation = z.infer<typeof FormSchema>;
type NewOrganisationFormProps = {
    closeHandler: ()=>void, 
    className?: string
}

export default function NewOrganisationForm({closeHandler, className}:NewOrganisationFormProps) {
    const { mutate: setOrganisation, isError, isSuccess, isPending} = useSetOrganisation();

    const form = useForm<NewOrganisation>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: 'personal',
            about: '',
            avatar_url: ''
        }
    });

    const {handleSubmit, formState: { isDirty, isSubmitting }} = form;

    async function onSubmit(data: NewOrganisation) {
        let avatarUrl = data.avatar_url;

        if (avatarUrl instanceof File) 
            avatarUrl = await uploadFile(avatarUrl, 'organisation.avatars', data.name);

        const plainData = {...data, avatar_url: avatarUrl };
        setOrganisation({ orgData: plainData});
    };

    useEffect(() => {
        if (isError) {
            toast.error("Error occurred creating organisation");
        };

        if (isSuccess) {
            toast.success("Organisation created successfully");
            closeHandler();
        }

    }, [isError, isSuccess]);

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 p-4">
                    <TextInput name="name" label="Name" placeHolder="Enter the organisation name" />
                    <TextInput name="headline" label="Headline" placeHolder="Enter headline" />
                    <TextareaInput name="about" label="About" placeHolder="Something about this organisation" />
                    <SelectInput name="category" label="Category" placeHolder="Select a Category" list={orgCategories} />
                    <ImageInput name="avatar_url" label="Avatar" />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={!isDirty || isSubmitting || isPending}>
                        {(isSubmitting || isPending) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                        Create Organisation
                    </Button>
                </div>
            </form>
        </Form>
    )
}