import { motion } from "framer-motion";
import { Zap, Trophy, Target } from "lucide-react";

const features = [
  { icon: Zap, text: "Быстрый геймплей" },
  { icon: Trophy, text: "Живой рейтинг" },
  { icon: Target, text: "Азартные механики" },
];

const AboutBoldieSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-foreground/2 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
            ЭТО <span className="gradient-text-white text-glow-white">ИГРА</span>. И В НЕЙ ТЫ —{" "}
            <span className="text-foreground">ГЛАВНЫЙ</span>
          </h2>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              BOLD — это кликер, где твой статус растёт с каждым действием.
              Здесь нет случайностей — только твои решения определяют место в рейтинге.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Покупай клики, соревнуйся с другими игроками, поднимайся выше.
              Простые правила. Азартный геймплей.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:neon-border-white transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                <p className="text-foreground font-medium text-lg">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBoldieSection;
