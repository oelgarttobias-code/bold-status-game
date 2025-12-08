import { motion } from "framer-motion";
import { Medal, Flame, Gamepad2 } from "lucide-react";

const cards = [
  {
    icon: Medal,
    title: "Борьба за первое место",
    description: "Рейтинг обновляется в реальном времени. Но вершина для многих остаётся недосягаемой мечтой.",
  },
  {
    icon: Flame,
    title: "Азарт соревнования",
    description: "Видишь, кто выше тебя. Мечтаешь обогнать. Но мечты не всегда становятся реальностью.",
  },
  {
    icon: Gamepad2,
    title: "Простой геймплей",
    description: "Правила просты: или ты вверх, или вниз. Покупай клики, если хватит кошелька.",
  },
];

const WhyMenSection = () => {
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
            ПОЧЕМУ <span className="gradient-text-white text-glow-white">ТЫ В BOLD</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Потому что тебе нужна игра, где можно доказать своё превосходство. Или хотя бы попытаться.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:neon-border-white transition-all duration-500 text-center">
                <div className="w-20 h-20 rounded-2xl bg-foreground/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-10 h-10 text-foreground" />
                </div>
                
                <h3 className="text-2xl font-display mb-4 text-foreground">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMenSection;
