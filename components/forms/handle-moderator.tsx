import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SelectInput } from "../common/custom-form-fields";

const FormSchema = z.object({
    event_id: z.string(),
    user_id: z.string(),
    role_id: z.string(),
    is_active: z.boolean(),
});

export type HandleModerator = z.infer<typeof FormSchema>;
export type HandleModeratorFormProps = {
    variant?: 'new' | 'modify',
    eventID: string,
    moderator?: any,
    className?: string,
    closeHandler: ()=>void,
}

export default function HandleModeratorForm(props:HandleModeratorFormProps) {
    const {variant='new', closeHandler, eventID, className} = props;
    const form = useForm<HandleModerator>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            event_id: eventID,
            user_id: '',
            role_id: '',
            is_active: false,
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;
    const dummyUserList = [
        { label: "brian.lee@example.com", value: "9897967-90878-85667-786868"},
    ]
    const dummyRoleList = [
        { label: "Admin", value: "9897967-90878-85667-786868"},
    ]
    // fetch users in organisation
    // if searched user, fetch user by name or email that matches query and pass to select 
    // fetch roles in with this event_id

    function onSubmit(data: HandleModerator) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })

        closeHandler();
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 overflow-auto p-4">
                    <SelectInput name="user_id" label="User" placeHolder="Select a user" list={dummyUserList} />
                    <SelectInput name="role_id" label="Role" placeHolder="Select a role" list={dummyRoleList} />
                    {/* is_active switch input */}
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Add Moderator</Button>
                </div>
            </form>
        </Form>
    )
}