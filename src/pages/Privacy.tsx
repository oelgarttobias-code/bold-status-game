import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Privacy = () => {
  const { t } = useLanguage();
  const sections = t.privacy.sections;

  return (
    <main className="min-h-screen bg-background py-20">
      <LanguageSwitcher />
      <div className="container px-4 max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.back}
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display gradient-text-white text-glow-white mb-8">
          {t.privacy.title}
        </h1>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-display text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {section.content}
              </p>
              {'list' in section && section.list && (
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Privacy;
