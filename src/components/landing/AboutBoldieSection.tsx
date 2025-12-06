import { motion } from "framer-motion";

const quotes = [
  "Ну давай, удиви меня",
  "Хм… смело. Мне нравится",
  "Покажи, на что ты способен в игре",
];

const AboutBoldieSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
            Я <span className="gradient-text-pink text-glow-pink">Boldie</span>. И я люблю тех, кто не боится{" "}
            <span className="gradient-text-gold text-glow-gold">играть</span>
          </h2>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Boldie — цифровая дива, которая любит внимание, статус и дерзость.
              Она проверяет игроков флиртом и хитростью.
              Она любит смелых, азартных и уверенных.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Но это всего лишь игра.
              И Boldie играет честно — если играешь честно ты.
            </p>
          </div>
          
          {/* Boldie Quotes */}
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:neon-border-pink transition-all duration-500 group"
              >
                <div className="text-4xl mb-4">💋</div>
                <p className="text-primary group-hover:text-secondary transition-colors italic font-medium text-lg">
                  "{quote}"
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
