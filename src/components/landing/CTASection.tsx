import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[200px]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-card rounded-[2rem] p-12 md:p-16 neon-border-white">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center mx-auto mb-8 box-glow-white"
            >
              <Gamepad2 className="w-10 h-10 text-background" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ГОТОВ <span className="gradient-text-white text-glow-white">ДОКАЗАТЬ</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Если думаешь, что достоин — запусти игру. Но помни, в топе места мало.
            </p>
            
            <a href="https://t.me/be_BOLD_bot" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Gamepad2 className="mr-2 group-hover:scale-110 transition-transform" />
                ПОПЫТАТЬ УДАЧУ
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
