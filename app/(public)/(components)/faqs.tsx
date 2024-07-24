import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

export default function Faqs() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-screen-md mx-auto lg:p-6 p-5">
            {faqs.map(({ question, answer }, _id) => (
                <AccordionItem key={_id} value={question} defaultChecked={_id === 0} className="mb-4">
                    <AccordionTrigger className="text-lg font-light text-left text-gray-800 py-4 px-6  rounded-sm border">
                        {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-normal text-gray-700 leading-relaxed p-6 border-t border-gray-200 bg-white rounded-b-lg">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
