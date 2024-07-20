"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { TextInput } from "../common/custom-form-fields";

const FormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    event_id: z.string(),
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
    variant?: 'new' | 'modify',
    eventID: string,
    role?: any,
    className?: string,
    closeHandler: ()=>void
}

export default function HandleModeratorRoleForm(props:HandleModeratorRoleFormProps) {
    const {variant='new', eventID, closeHandler, className} = props;
    const form = useForm<HandleModeratorRole>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            event_id: eventID,
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

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: HandleModeratorRole) {
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
                    <TextInput name="name" label="Role Name" placeHolder="Enter a role name" />
                    <TextInput name="headline" label="Headline" placeHolder="What describes this role" />
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
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Add Role</Button>
                </div>
            </form>
        </Form>
    )
}