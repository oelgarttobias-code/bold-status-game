import { motion } from "framer-motion";
import { MousePointerClick, Trophy, Eye } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Клики — это сила",
    description: "Покупая игровые клики, ты поднимаешь свой статус. Никаких оценок реального богатства. Только игровой прогресс.",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Trophy,
    title: "Рейтинг — твоя арена",
    description: "Поднимайся выше других игроков и доказывай, что ты умеешь играть в стиль.",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: Eye,
    title: "Boldie следит за успехами",
    description: "Чем выше твои результаты, тем интереснее реплики Boldie. Это часть игрового опыта.",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Кликер статуса.{" "}
            <span className="gradient-text-gold text-glow-gold">Всё просто</span>{" "}
            — и очень{" "}
            <span className="gradient-text-pink text-glow-pink">азартно</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="glass-card rounded-3xl p-8 h-full hover:neon-border-gold transition-all duration-500 relative z-10">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-display text-xl text-primary-foreground box-glow-gold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-display mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
