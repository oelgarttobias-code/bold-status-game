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
    answer: "BOLD — это игровой кликер в Telegram, где ты соревнуешься с другими игроками за место в рейтинге.",
  },
  {
    question: "Как работает игра?",
    answer: "Покупаешь клики — растёшь в рейтинге. Чем больше кликов, тем выше твоя позиция среди других игроков.",
  },
  {
    question: "Есть рейтинг игроков?",
    answer: "Да, рейтинг обновляется автоматически. Ты видишь свою позицию и можешь соревноваться за первые места.",
  },
  {
    question: "Это бесплатно?",
    answer: "Игра бесплатна для старта. Клики покупаются для ускорения роста в рейтинге.",
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
