import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImageInput, SelectInput, TextInput } from "@/components/common/custom-form-fields";
import { Button } from "../ui/button";

const orgCategories = [
    "Personal",
    "Other",
    "Cultural Society",
    "Academic Society",
    "Faith and Spiritual Society",
    "Hobbies and Interests Society",
    "Volunteer and Charity Society",
    "Social and Political Society",
    "Technology and Innovation Society",
    "Arts and Performance Society",
] as const;

const FormSchema = z.object({
    name: z.string().min(1, "Must Enter Organisation Name"),
    headline: z.string(),
    category: z.enum(orgCategories),
    avatar_url: z.instanceof(File).refine(file => file.type.startsWith('image/'))
                .or(z.string().min(1, "field can't be an empty string"))
                .nullable()
});

export type NewOrganisation = z.infer<typeof FormSchema>;

export default function NewOrganisationForm({closeDialog = () => {}, className}:{closeDialog?: ()=>void, className?: string}) {
    const form = useForm<NewOrganisation>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: 'Personal',
            avatar_url: null
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: NewOrganisation) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });

        closeDialog();
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full space-y-4", className)}>
                <TextInput name="name" label="Name" placeHolder="Enter the organisation name" />
                <TextInput name="headline" label="Headline" placeHolder="Enter headline" />
                <SelectInput name="category" label="Category" placeHolder="Select a Category" list={orgCategories as unknown as string[]} />
                <ImageInput name="avatar_url" label="Avatar" />
                <Button size='xs' disabled={isSubmitting}>Create Organisation</Button>
            </form>
        </Form>
    )
}