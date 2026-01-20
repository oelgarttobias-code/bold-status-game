import { motion } from "framer-motion";
import { Medal, Flame, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Medal, Flame, Gamepad2];

const WhyMenSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            {t.why.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.why.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.why.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 h-full text-center">
                  <div className="w-20 h-20 rounded-2xl bg-foreground/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-display mb-4 text-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMenSection;
