import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    user_id: z.string(),
    role_id: z.string(),
    is_active: z.string(),
});

export type HandleModerator = z.infer<typeof FormSchema>;
export type HandleModeratorFormProps = {
    variant: 'new' | 'modify',
    event: any,
    moderator?: any,
    className?: string
}

export default function HandleModeratorForm({variant='new', className}:HandleModeratorFormProps) {
    const form = useForm<HandleModerator>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_id: '',
            role_id: '',
            is_active: '',
        }
    });

    const {handleSubmit} = form;
    // fetch users in organisation
    // if searched user, fetch user by name or email that matches query and pass to select 
    // fetch roles in with this event_id

    function onSubmit(data: HandleModerator) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>\
                {/* user_id select input */}
                {/* role_id select input */}
                {/* is_active switch input */}
                {/* submit button */}
            </form>
        </Form>
    )
}