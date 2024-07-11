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
        can_modify_organisation: z.boolean(),
        can_add_new_member: z.boolean(),
        can_modify_member: z.boolean(),
        can_remove_member: z.boolean(),
        can_add_new_role: z.boolean(),
        can_modify_role: z.boolean(),
        can_remove_role: z.boolean(),
        can_add_new_event: z.boolean(),
    }),
});

export type HandleMemberRole = z.infer<typeof FormSchema>;
export type HandleMemberRoleFormProps = {
    variant: 'new' | 'modify',
    organisation: any,
    role?: any,
    className?: string
}

export default function HandleMemberRoleForm({variant='new', className}:HandleMemberRoleFormProps) {
    const form = useForm<HandleMemberRole>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            headline: '',
            permissions: {
                can_modify_organisation: false,
                can_add_new_member: false,
                can_modify_member: false,
                can_remove_member: false,
                can_add_new_role: false,
                can_modify_role: false,
                can_remove_role: false,
                can_add_new_event: false
            },
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: HandleMemberRole) {
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
                {/* permissions.can_modify_organisation switch input */}
                {/* permissions.can_add_new_member switch input */}
                {/* permissions.can_modify_member switch input */}
                {/* permissions.can_remove_member switch input */}
                {/* permissions.can_add_new_role switch input */}
                {/* permissions.can_modify_role switch input */}
                {/* permissions.can_remove_role switch input */}
                {/* permissions.can_add_new_event switch input */}
                {/* submit button */}
            </form>
        </Form>
    )
}