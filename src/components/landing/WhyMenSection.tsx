import { motion } from "framer-motion";
import { Medal, Heart, Gamepad2 } from "lucide-react";

const cards = [
  {
    icon: Medal,
    title: "Соревнование за первое место",
    description: "Поднимайся в рейтинге и стань лучшим игроком",
  },
  {
    icon: Heart,
    title: "Флиртующие реакции Boldie",
    description: "Уникальные реплики за твои достижения в игре",
  },
  {
    icon: Gamepad2,
    title: "Игровая модель статуса",
    description: "Простая механика, азартный геймплей",
  },
];

const WhyMenSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Boldie любит тех, кто играет{" "}
            <span className="gradient-text-gold text-glow-gold">уверенно</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Мужчины выбирают Bold, потому что это азарт, игра и лёгкая провокация.
            Это возможность показать характер — не в жизни, а в игровом формате.
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
              <div className="glass-card rounded-3xl p-8 h-full hover:neon-border-pink transition-all duration-500 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-10 h-10 text-secondary" />
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
