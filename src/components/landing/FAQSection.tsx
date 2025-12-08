import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что такое BOLD?",
    answer: "BOLD — это игра для тех, кто считает себя крутым. Здесь ты можешь попробовать доказать это другим.",
  },
  {
    question: "Как работает игра?",
    answer: "Покупаешь клики, если хватит денег. Растёшь в рейтинге, если повезёт. Но не рассчитывай на лёгкую победу.",
  },
  {
    question: "Есть рейтинг игроков?",
    answer: "Да, и он жесток. Ты сразу увидишь, где ты на самом деле. Не обманывай себя.",
  },
  {
    question: "Это бесплатно?",
    answer: "Начать можно бесплатно. Но чтобы действительно подняться, придётся раскошелиться.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            <span className="gradient-text-white text-glow-white">ВОПРОСЫ</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
