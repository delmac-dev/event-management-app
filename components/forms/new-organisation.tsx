import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    category: z.string(),
    avatar_url: z.string()
});

export type NewOrganisation = z.infer<typeof FormSchema>;

export default function NewOrganisationForm({className}:{className?: string}) {
    const form = useForm<NewOrganisation>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: '',
            avatar_url: ''
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: NewOrganisation) {
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