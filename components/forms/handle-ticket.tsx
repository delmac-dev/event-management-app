import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    name: z.string(),
    availabilty: z.string(),
    ticket_code_prefix: z.string(),
    total_tickets: z.string(),
    ticket_type: z.string(),
    price: z.string(),
    is_active: z.string(),
    wait_on: z.string()
});

export type HandleTicket = z.infer<typeof FormSchema>;
export type HandleTicketFormProps = {
    variant: 'new' | 'modify',
    event: any,
    ticket?: any,
    className?: string
}

export default function HandleTicketForm({variant='new', event, ticket, className}:HandleTicketFormProps) {
    const form = useForm<HandleTicket>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            availabilty: '',
            ticket_code_prefix: '',
            total_tickets: '',
            ticket_type: '',
            price: '',
            is_active: '',
            wait_on: ''
        }
    });

    const {handleSubmit} = form;
    
    // fetch all tickets of this event.id

    function onSubmit(data: HandleTicket) {
        // get the event id from th event
        // get the ticket id from the ticket if variant is modify
        // check if the capacity is less than total_tickets and return an error
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* name input */}
                {/* availability radio input of available or unavailable*/}
                {/* ticket_code_prefix string input */}
                {/* total_tickets number input */}
                {/* ticket_type radio input of free or priced*/}
                {/* price string input of type number */}
                {/* is_active switch input */}
                {/* wait_on select of all active tickets of this event */}
                {/* submit button */}
            </form>
        </Form>
    )
}