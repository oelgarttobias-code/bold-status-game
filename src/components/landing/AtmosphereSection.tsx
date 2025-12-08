import { motion } from "framer-motion";
import { Zap, Smartphone, BarChart3, Users } from "lucide-react";

const features = [
  { icon: Zap, text: "Мгновенный старт" },
  { icon: Smartphone, text: "Прямо в Telegram" },
  { icon: BarChart3, text: "Живой рейтинг" },
  { icon: Users, text: "Тысячи игроков" },
];

const AtmosphereSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-foreground/3 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-foreground/3 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ИГРА ПРО <span className="gradient-text-white text-glow-white">СТАТУС</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Это не про деньги. Это про азарт соревнования и желание быть лучше.
              Простая механика. Реальный адреналин.
            </p>
          </motion.div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:neon-border-white transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;
