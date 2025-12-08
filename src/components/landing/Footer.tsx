import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display gradient-text-white text-glow-white">
              BOLD
            </span>
          </div>
          
          {/* Links */}
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BOLD. Доступ ограничен. Статус — нет.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
