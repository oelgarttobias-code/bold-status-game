import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:neon-border-white transition-all duration-300"
    >
      <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-foreground' : 'text-muted-foreground'}`}>
        {t.language.en}
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={`text-sm font-medium transition-colors ${language === 'ru' ? 'text-foreground' : 'text-muted-foreground'}`}>
        {t.language.ru}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
