"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";

const FormSchema = z.object({
    username: z.string(),
    full_name: z.string(),
    email: z.string(),
    avatar_url: z.string(),
});

export type HandleProfile = z.infer<typeof FormSchema>;

export default function HandleProfileForm({className}:{className?: string}) {
    const form = useForm<HandleProfile>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            full_name: '',
            email: '',
            avatar_url: '',
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: HandleProfile) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                {/* username string input */}
                <TextInput name="username" label="Username" />
                <TextInput name="full_name" label="Full Name" />
                <TextInput name="email" label="Email" disabled />
                <TextInput name="avatar_url" label="Profile Picture" />
                <div className="w-full flex justify-end">
                    <Button size='xs' disabled={isSubmitting}>Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}