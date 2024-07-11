import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

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

    const {handleSubmit} = form;

    function onSubmit(data: HandleProfile) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>\
                {/* username string input */}
                {/* full_name string input */}
                {/* email string input */}
                {/* avatar_url string input */}
                {/* submit button */}
            </form>
        </Form>
    )
}