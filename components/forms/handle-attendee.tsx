import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    user_id: z.string(),
    ticket_id: z.string(),
    full_name: z.string(),
    email: z.string(),
    status: z.string(),
    payment_status: z.string(),
});

export type HandleAttendee = z.infer<typeof FormSchema>;
export type HandleAttendeeFormProps = {
    variant: 'new' | 'modify',
    event: any,
    attendee?: any,
    className?: string
}

export default function HandleAttendeeForm({className}:HandleAttendeeFormProps) {
    const form = useForm<HandleAttendee>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_id: '',
            ticket_id: '',
            full_name: '',
            email: '',
            status: '',
            payment_status: '',
        }
    });

    const {handleSubmit} = form;
    // select all tickets where event.id and pass to select

    function onSubmit(data: HandleAttendee) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* user_id search select input */}
                {/* ticket_id select input */}
                {/* full_name string input */}
                {/* email string input */}
                {/* status select input */}
                {/* payment_status select input */}
                {/* submit button */}
            </form>
        </Form>
    )
}