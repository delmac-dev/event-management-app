import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    organisation_id: z.string(),
    name: z.string(),
    headline: z.string(),
    capacity: z.string(),
    event_type: z.string(),
    category: z.string(),
    tags: z.string(),
    event_date: z.string(),
    start_at: z.string(),
    end_at: z.string(),
    location: z.object({
        country: z.string(),
        school: z.string(),
        google_location: z.string(),
        description: z.string()
    }),
    banner: z.string()
});

export type NewEvent = z.infer<typeof FormSchema>;

export default function NewEventForm({organisation, className}:{organisation:any, className?: string}) {
    const form = useForm<NewEvent>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            organisation_id: organisation.id as string,
            name: '',
            headline: '',
            capacity: '',
            event_type: '',
            category: '',
            tags: '',
            event_date: '',
            start_at: '',
            end_at: '',
            location: {
                country: '',
                school: '',
                google_location: '',
                description: ''
            },
            banner: ''
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: NewEvent) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    // if organisation just pass organisation as select option and selected as default else
    // fetch organisations where the user_id has permission to create event and pass to select input

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* organisation_id select input form setting value to organisation if starting event in an organisation */}
                {/* name input */}
                {/* headline input */}
                {/* capacity number input */}
                {/* event_type radio input of public or private */}
                {/* category select input */}
                {/* image select input */}
                {/* tags input */}
                {/* event_date date input */}
                {/* start_at date input */}
                {/* end_at time input */}
                {/* location.country select input of countries */}
                {/* location.school select input of schools */}
                {/* location.google_location select input of actual place location */}
                {/* location.description textarea input */}
                {/* banner image input */}
                {/* submit button */}
            </form>
        </Form>
    )
}