import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ backgroundImage: 'var(--gradient-hero)' }}
      />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full glass-card text-sm text-foreground font-medium flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Telegram Game
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display mb-6 leading-tight">
            <span className="gradient-text-white text-glow-white">BOLD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display tracking-wide">
            СТАТУС-КЛИКЕР В TELEGRAM
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Соревнуйся с другими игроками. Поднимайся в рейтинге. Докажи, что ты играешь по-крупному.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://t.me/be_BOLD_bot" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Gamepad2 className="mr-2 group-hover:scale-110 transition-transform" />
                ИГРАТЬ
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
