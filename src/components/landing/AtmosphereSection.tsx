import { motion } from "framer-motion";
import { Sparkles, Smartphone, Shield, TrendingUp } from "lucide-react";

const features = [
  { icon: Sparkles, text: "Игривый teasing от Boldie" },
  { icon: Smartphone, text: "Telegram-формат — удобно и быстро" },
  { icon: Shield, text: "Прозрачная механика" },
  { icon: TrendingUp, text: "Азартный рейтинг игроков" },
];

const AtmosphereSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
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
              Игра про{" "}
              <span className="gradient-text-gold text-glow-gold">стиль</span>. Про{" "}
              <span className="gradient-text-pink text-glow-pink">смелость</span>. Про то, чтобы быть ярче
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Bold — это не про деньги. Это про ощущение силы, уверенности и статуса внутри игры.
              Это соревнование, где интерес — главный приз.
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
                className="glass-card rounded-2xl p-6 text-center hover:neon-border-gold transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
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
