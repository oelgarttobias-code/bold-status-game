import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display gradient-text-gold text-glow-gold mb-8">
          Privacy Policy
        </h1>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bold («мы», «нас» или «наш») уважает вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего Telegram-приложения Bold.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. Собираемая информация</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы можем собирать следующую информацию:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Telegram ID пользователя</li>
              <li>Имя пользователя в Telegram</li>
              <li>Игровая статистика и прогресс</li>
              <li>Данные о транзакциях в игре</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Использование информации</h2>
            <p className="text-muted-foreground leading-relaxed">
              Собранная информация используется для обеспечения работы игры, ведения рейтингов, обработки игровых транзакций и улучшения пользовательского опыта.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Защита данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы применяем современные меры безопасности для защиты вашей информации от несанкционированного доступа, изменения или уничтожения.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">5. Контакты</h2>
            <p className="text-muted-foreground leading-relaxed">
              По вопросам конфиденциальности обращайтесь: support@bold.game
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
