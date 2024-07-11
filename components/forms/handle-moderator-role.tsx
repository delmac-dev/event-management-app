import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    permissions: z.object({
        can_modify_event: z.boolean(),
        can_add_new_moderator: z.boolean(),
        can_modify_moderator: z.boolean(),
        can_remove_moderator: z.boolean(),
        can_add_new_role: z.boolean(),
        can_modify_role: z.boolean(),
        can_remove_role: z.boolean(),
        can_add_new_ticket: z.boolean(),
        can_modify_ticket: z.boolean(),
        can_remove_ticket: z.boolean(),
        can_add_new_attendee: z.boolean(),
        can_modify_attendee: z.boolean(),
        can_remove_attendee: z.boolean(),
    }),
});

export type HandleModeratorRole = z.infer<typeof FormSchema>;
export type HandleModeratorRoleFormProps = {
    variant: 'new' | 'modify',
    event: any,
    role?: any,
    className?: string
}

export default function HandleModeratorRoleForm({variant='new', className}:HandleModeratorRoleFormProps) {
    const form = useForm<HandleModeratorRole>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            headline: '',
            permissions: {
                can_modify_event: false,
                can_add_new_moderator: false,
                can_modify_moderator: false,
                can_remove_moderator: false,
                can_add_new_role: false,
                can_modify_role: false,
                can_remove_role: false,
                can_add_new_ticket: false,
                can_modify_ticket: false,
                can_remove_ticket: false,
                can_add_new_attendee: false,
                can_modify_attendee: false,
                can_remove_attendee: false
            },
        }
    });

    const {handleSubmit} = form;
    // fetch users in organisation
    // if searched user, fetch user by name or email that matches query and pass to select 
    // fetch roles in with this event_id

    function onSubmit(data: HandleModeratorRole) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>\
                {/* name string input */}
                {/* headline string input */}
                {/* permissions.can_modify_event switch input */}
                {/* permissions.can_add_new_moderator switch input */}
                {/* permissions.can_modify_moderator switch input */}
                {/* permissions.can_remove_moderator switch input */}
                {/* permissions.can_add_new_role switch input */}
                {/* permissions.can_modify_role switch input */}
                {/* permissions.can_remove_role switch input */}
                {/* permissions.can_add_new_ticket switch input */}
                {/* permissions.can_modify_ticket switch input */}
                {/* permissions.can_remove_ticket switch input */}
                {/* permissions.can_add_new_attendee switch input */}
                {/* permissions.can_modify_attendee switch input */}
                {/* permissions.can_remove_attendee switch input */}
                {/* submit button */}
            </form>
        </Form>
    )
}