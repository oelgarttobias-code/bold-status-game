import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[150px]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-card rounded-[2rem] p-12 md:p-16 neon-border-gold">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 box-glow-gold"
            >
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Ну что, <span className="gradient-text-gold text-glow-gold">герой</span>?{" "}
              <br className="hidden md:block" />
              Покажешь Boldie свой{" "}
              <span className="gradient-text-pink text-glow-pink">стиль</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Начни игру прямо сейчас и докажи, что ты можешь больше
            </p>
            
            <Button variant="hero" size="xl" className="group">
              <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
              Запустить игру в Telegram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
