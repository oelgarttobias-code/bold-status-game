import { motion } from "framer-motion";
import { MousePointerClick, Trophy, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Покупай клики",
    description: "Каждый клик увеличивает твой игровой счёт. Больше кликов — выше позиция в рейтинге.",
  },
  {
    icon: TrendingUp,
    title: "Расти в статусе",
    description: "Твой прогресс виден всем. Соревнуйся с другими игроками за первые места.",
  },
  {
    icon: Trophy,
    title: "Стань лучшим",
    description: "Возглавь рейтинг и докажи, что ты играешь по-крупному.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            КАК <span className="gradient-text-white text-glow-white">ИГРАТЬ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Три шага до вершины рейтинга
          </p>
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
              
              <div className="glass-card rounded-3xl p-8 h-full hover:neon-border-white transition-all duration-500 relative z-10">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center font-display text-xl text-background box-glow-white">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-foreground" />
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
