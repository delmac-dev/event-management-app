import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export default function Faqs() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-screen-md mx-auto lg:p-6 p-5">
            {FAQS.map(({ question, answer }, _id) => (
                <AccordionItem key={_id} value={question} defaultChecked={_id === 0} className="mb-4">
                    <AccordionTrigger>
                        {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}