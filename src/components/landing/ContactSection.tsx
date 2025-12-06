import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            <span className="gradient-text-pink text-glow-pink">Контакты</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Есть вопросы? Напиши нам
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            href="mailto:support@bold.game"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl px-8 py-6 flex items-center gap-4 hover:neon-border-gold transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">support@bold.game</p>
            </div>
          </motion.a>
          
          <motion.a
            href="https://t.me/bold_support"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl px-8 py-6 flex items-center gap-4 hover:neon-border-pink transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
              <Send className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Telegram</p>
              <p className="text-foreground font-medium">@bold_support</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
