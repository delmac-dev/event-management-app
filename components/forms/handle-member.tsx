import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SelectInput } from "../common/custom-form-fields";

const FormSchema = z.object({
    user_id: z.string().min(1),
    organisation_id: z.string().min(1),
    is_active: z.string(),
});

export type HandleMember = z.infer<typeof FormSchema>;
export type HandleMemberFormProps = {
    variant?: 'new' | 'modify',
    orgID: string,
    member?: any,
    className?: string,
    closeHandler: ()=>void
}

export default function HandleMemberForm(props:HandleMemberFormProps) {
    const {variant='new', orgID, closeHandler, className} = props
    const form = useForm<HandleMember>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_id: '',
            organisation_id: orgID,
            is_active: '',
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;
    const dummyUserList = [
        { label: "brian.lee@example.com", value: "9897967-90878-85667-786868"},
    ]

    function onSubmit(data: HandleMember) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 overflow-auto p-4">
                    <SelectInput name="user_id" label="User" placeHolder="Select a user" list={dummyUserList} />
                    {/* is_active switch input */}
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Invite Member</Button>
                </div>
            </form>
        </Form>
    )
}