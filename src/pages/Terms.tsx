import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          Terms of Use
        </h1>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Принятие условий</h2>
            <p className="text-muted-foreground leading-relaxed">
              Используя приложение Bold, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте приложение.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. Описание сервиса</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bold — это игровое приложение в формате кликера, работающее через Telegram. Приложение предоставляет развлекательный контент и игровую механику для соревнования между пользователями.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Игровая валюта и покупки</h2>
            <p className="text-muted-foreground leading-relaxed">
              Все покупки в игре являются добровольными. Игровые клики и статус являются виртуальными игровыми элементами и не имеют реальной денежной стоимости вне игры.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Правила поведения</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Пользователи обязуются:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Не использовать читы и эксплойты</li>
              <li>Не нарушать работу сервиса</li>
              <li>Соблюдать правила Telegram</li>
              <li>Уважать других пользователей</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">5. Ограничение ответственности</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bold предоставляется «как есть». Мы не гарантируем бесперебойную работу сервиса и не несём ответственности за любые убытки, связанные с использованием приложения.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">6. Изменение условий</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы оставляем за собой право изменять настоящие условия. Продолжение использования приложения после изменений означает ваше согласие с новыми условиями.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">7. Контакты</h2>
            <p className="text-muted-foreground leading-relaxed">
              По вопросам обращайтесь: support@bold.game
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
