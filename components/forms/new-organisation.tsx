import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImageInput, SelectInput, TextInput } from "@/components/common/custom-form-fields";
import { Button } from "../ui/button";
import { orgCategories } from "@/lib/constants";

const FormSchema = z.object({
    name: z.string().min(1, "Must Enter Organisation Name"),
    headline: z.string(),
    category: z.string(),
    avatar_url: z.instanceof(File).refine(file => file.type.startsWith('image/'))
                .or(z.string().min(1, "field can't be an empty string"))
                .nullable()
});

export type NewOrganisation = z.infer<typeof FormSchema>;
type NewOrganisationFormProps = {
    closeHandler: ()=>void, 
    className?: string
}

export default function NewOrganisationForm({closeHandler, className}:NewOrganisationFormProps) {
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

        closeHandler();
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="flex-1 space-y-4">
                    <TextInput name="name" label="Name" placeHolder="Enter the organisation name" />
                    <TextInput name="headline" label="Headline" placeHolder="Enter headline" />
                    <SelectInput name="category" label="Category" placeHolder="Select a Category" list={orgCategories} />
                    <ImageInput name="avatar_url" label="Avatar" />
                </div>
                <div  className="w-full pt-4 flex flex-row-reverse justify-between">
                    <Button size='xs' disabled={isSubmitting}>Create Organisation</Button>
                </div>
            </form>
        </Form>
    )
}