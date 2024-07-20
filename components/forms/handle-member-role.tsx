import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";

const FormSchema = z.object({
    name: z.string(),
    organisation_id: z.string(),
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
    variant?: 'new' | 'modify',
    orgID: string,
    role?: any,
    className?: string,
    closeHandler: ()=>void
}

export default function HandleMemberRoleForm(props:HandleMemberRoleFormProps) {
    const {variant='new', orgID, closeHandler, className} = props;
    const form = useForm<HandleMemberRole>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            organisation_id: orgID,
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

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: HandleMemberRole) {
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
                    {/* permissions.can_modify_organisation switch input */}
                    {/* permissions.can_add_new_member switch input */}
                    {/* permissions.can_modify_member switch input */}
                    {/* permissions.can_remove_member switch input */}
                    {/* permissions.can_add_new_role switch input */}
                    {/* permissions.can_modify_role switch input */}
                    {/* permissions.can_remove_role switch input */}
                    {/* permissions.can_add_new_event switch input */}
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Add Role</Button>
                </div>
            </form>
        </Form>
    )
}