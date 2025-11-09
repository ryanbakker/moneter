import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "../Heading";
import { FAQS } from "@/constants/questions";

const Faqs = () => {
  return (
    <section>
      <div className="section-container">
        <Heading
          heading="FAQs"
          subheading="View the frequently asked questions, if you still need help please get in touch through the link below."
        />

        <Accordion type="single" collapsible className="w-full" defaultValue="">
          {FAQS.map((ques) => (
            <AccordionItem key={ques.index} value={ques.index}>
              <AccordionTrigger className="cursor-pointer text-base font-semibold text-indigo-950 dark:text-indigo-50 transition-all">
                {ques.label}
              </AccordionTrigger>
              <AccordionContent>{ques.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
