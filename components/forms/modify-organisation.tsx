import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const GeneralFormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    category: z.string(),
    avatar_url: z.string()
});

const OwnerFormSchema = z.object({
    owner: z.string(),
});

export type ModifyOrganisationGeneral = z.infer<typeof GeneralFormSchema>;
export type ModifyOrganisationOwner = z.infer<typeof OwnerFormSchema>;

export function ModifyOrganisationGeneralForm({organisation, className}:{organisation:any, className?: string}) {
    const form = useForm<ModifyOrganisationGeneral>({
        resolver: zodResolver(GeneralFormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: '',
            avatar_url: ''
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyOrganisationGeneral) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* name input */}
                {/* headline input */}
                {/* category select input */}
                {/* image select input */}
                {/* submit button */}
            </form>
        </Form>
    )
}

export function ModifyOrganisationOwnerForm({organisation, className}:{organisation:any, className?: string}) {
    const form = useForm<ModifyOrganisationOwner>({
        resolver: zodResolver(GeneralFormSchema),
        defaultValues: {
            owner: '',
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyOrganisationOwner) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* select input */}
                {/* submit button */}
            </form>
        </Form>
    )
}