"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { SelectInput, TextInput } from "../common/custom-form-fields";
import { orgCategories } from "@/lib/constants";
import { Button } from "../ui/button";

const ModifyOrgFormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    category: z.string(),
    avatar_url: z.string(),
    owner: z.string(),
});

export type ModifyOrganisation = z.infer<typeof ModifyOrgFormSchema>;

export function ModifyOrganisationForm({orgID, className}:{orgID: string, className?: string}) {
    const form = useForm<ModifyOrganisation>({
        resolver: zodResolver(ModifyOrgFormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: '',
            avatar_url: '',
            owner: '',
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: ModifyOrganisation) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                <TextInput name="name" label="Name" />
                <TextInput name="headline" label="Headline" />
                <SelectInput name="category" label="Category" placeHolder="Select a Category" list={orgCategories} />
                {/* image select input */}
                <TextInput name="owner" label="Organisation Owner" />
                <div className="w-full flex justify-end">
                    <Button size='xs' disabled={isSubmitting}>Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}