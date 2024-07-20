import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { RadioGroupInput, SelectInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";

const FormSchema = z.object({
    user_id: z.string().nullable(),
    ticket_id: z.string(),
    full_name: z.string(),
    email: z.string(),
    status: z.string(),
    payment_status: z.string(),
});

export type HandleAttendee = z.infer<typeof FormSchema>;
export type HandleAttendeeFormProps = {
    variant?: 'new' | 'modify',
    closeHandler: ()=>void,
    eventID: string,
    attendee?: any,
    className?: string
}

export default function HandleAttendeeForm(props:HandleAttendeeFormProps) {
    const { variant, closeHandler, eventID, attendee, className} = props;
    const form = useForm<HandleAttendee>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_id: null,
            ticket_id: '',
            full_name: '',
            email: '',
            status: 'registered',
            payment_status: 'completed',
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;
    const statusOptions = ['registered', 'checked-in', 'cancelled', 'no-show'];
    const paymentStatusOptions = ['pending', 'completed', 'failed'];
    // select all tickets where event.id and pass to select
    const dummyTicketList = [
        { label: "Early Bird A", value: "9897967-90878-85667-786868"},
    ]

    function onSubmit(data: HandleAttendee) {
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
                    <SelectInput name="ticket_id" label="Ticket" placeHolder="Select a category" list={dummyTicketList} />
                    <TextInput name="full_name" label="Full Name" placeHolder="Enter the attendee's full name" />
                    <TextInput name="email" label="Email" placeHolder="Enter the attendee's email" />
                    <RadioGroupInput name="status" label="Ticket Type" disabled options={statusOptions.slice(0,2)} />
                    <RadioGroupInput name="payment_status" label="Payment Status" disabled options={paymentStatusOptions.slice(0,2)} />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Add Ticket</Button>
                </div>
            </form>
        </Form>
    )
}