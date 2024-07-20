import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { NumberInput, RadioGroupInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";

const FormSchema = z.object({
    event_id: z.string(),
    name: z.string(),
    availabilty: z.string(),
    ticket_code_prefix: z.string(),
    total_tickets: z.string(),
    ticket_type: z.string(),
    price: z.string(),
    is_active: z.boolean(),
});

export type HandleTicket = z.infer<typeof FormSchema>;
export type HandleTicketFormProps = {
    variant?: 'new' | 'modify',
    closeHandler: () => void,
    eventID: string,
    ticket?: any,
    className?: string
}

export default function HandleTicketForm(props:HandleTicketFormProps) {
    const {variant='new', eventID, ticket, className, closeHandler} = props;
    const form = useForm<HandleTicket>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            event_id: eventID,
            name: '',
            availabilty: 'available',
            ticket_code_prefix: 'TIX',
            total_tickets: '25',
            ticket_type: 'free',
            price: '0',
            is_active: true,
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;
    const availabilityOptions = ["available", "unavailable"];
    const ticketTypeOptions = ["free", "priced"];

    function onSubmit(data: HandleTicket) {
        // get the ticket id from the ticket if variant is modify
        // check if the capacity is less than total_tickets and return an error
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });

        closeHandler();
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 overflow-auto p-4">
                    <TextInput name="name" label="Ticket Name" placeHolder="Enter the ticket name" />
                    <RadioGroupInput name="availabilty" label="Availability" options={availabilityOptions} />
                    <TextInput name="ticket_code_prefix" label="Ticket Code Prefix" placeHolder="Enter ticket code prefix" />
                    <NumberInput name="total_tickets" label="Total Tickets" placeHolder="25" />
                    <RadioGroupInput name="ticket_type" label="Ticket Type" disabled options={ticketTypeOptions} />
                    <NumberInput name="price" label="Price" placeHolder="25" disabled={form.getValues('ticket_type') === 'free'} />
                    {/* is_active switch input */}
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Add Ticket</Button>
                </div>
            </form>
        </Form>
    )
}