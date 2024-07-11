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
});

export type HandleTicketBooking = z.infer<typeof FormSchema>;
export type HandleTicketBookingFormProps = {
    event: any,
    className?: string
}

export default function HandleTicketBookingForm({className}:HandleTicketBookingFormProps) {
    const form = useForm<HandleTicketBooking>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_id: '',
            ticket_id: '',
            full_name: '',
            email: '',
        }
    });

    const {handleSubmit} = form;
    // select all tickets where event.id and pass to select

    function onSubmit(data: HandleTicketBooking) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* user_id switch input */}
                {/* ticket_id radio input */}
                {/* full_name string input */}
                {/* email string input */}
                {/* submit button */}
            </form>
        </Form>
    )
}