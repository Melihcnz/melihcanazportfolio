"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Custom cursor disabled

  // Mobile menü açıkken body scroll'unu engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Mobile menü dışında tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // E-posta gönderme işlemi burada yapılacak
    console.log('E-posta:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full z-50">
        <nav className="backdrop-blur-lg bg-background/30">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-24 px-4 md:px-8">
              <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-50 transition-opacity">
                MC™
              </Link>
              <div className="hidden md:flex items-center gap-12">
                <Link href="/" className="nav-link text-sm tracking-wide">Ana Sayfa</Link>
                <Link href="/portfolio" className="nav-link text-sm tracking-wide">Projeler</Link>
                <Link href="/pricing" className="nav-link text-sm tracking-wide">Fiyatlandırma</Link>
                <Link href="/company" className="nav-link text-sm tracking-wide">Kaynaklar</Link>
                <div 
                  className="theme-toggle" 
                  data-theme={theme} 
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
                ></div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-4">
                <div 
                  className="theme-toggle" 
                  data-theme={theme} 
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
                ></div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="hamburger-btn p-2"
                  aria-label="Menüyü aç/kapat"
                >
                  <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>

              <button className="hidden md:block text-sm px-6 py-2.5 border rounded-full hover:bg-foreground hover:text-background transition-all duration-300 nav-button">
                İletişime Geç
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="backdrop-blur-xl bg-background/98 border-t border-accent/30 shadow-2xl">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className="mobile-nav-link text-base tracking-wide py-4 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-icon">🏠</span>
                  Ana Sayfa
                </Link>
                <Link 
                  href="/portfolio" 
                  className="mobile-nav-link text-base tracking-wide py-4 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-icon">💼</span>
                  Projeler
                </Link>
                <Link 
                  href="/pricing" 
                  className="mobile-nav-link text-base tracking-wide py-4 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-icon">💰</span>
                  Fiyatlandırma
                </Link>
                <Link 
                  href="/company" 
                  className="mobile-nav-link text-base tracking-wide py-4 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-icon">📚</span>
                  Kaynaklar
                </Link>
                <div className="pt-4 border-t border-accent/20 mt-4">
                  <button 
                    className="mobile-contact-btn text-base px-8 py-4 border-2 border-foreground rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500 w-full font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-icon">📧</span>
                    İletişime Geç
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="py-10 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <Link href="/" className="text-xl font-medium tracking-tight">
                MC™
              </Link>
              <p className="text-muted text-sm leading-relaxed">
                Modern web teknolojileri ve yazılım geliştirme konusunda uzmanlaşmış Full Stack Developer.
                Yenilikçi çözümler ve kullanıcı dostu arayüzler.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-medium uppercase tracking-wider">Sayfalar</h4>
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">Ana Sayfa</Link>
                <Link href="/portfolio" className="text-sm text-muted hover:text-foreground transition-colors">Projeler</Link>
                <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">Fiyatlandırma</Link>
                <Link href="/company" className="text-sm text-muted hover:text-foreground transition-colors">Kaynaklar</Link>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-medium uppercase tracking-wider">Sosyal Medya</h4>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/Melihcnz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">GitHub</a>
                <a href="https://twitter.com/meelihcnz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">Twitter</a>
                <a href="https://www.linkedin.com/in/melih-canaz-ab9513155" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/meelihcnz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-medium uppercase tracking-wider">İletişim</h4>
              <div className="space-y-4">
                <p className="text-sm text-muted">Yeni projeler ve iş birlikleri için:</p>
                <a href="mailto:mcanaz1234@gmail.com" className="text-sm text-muted hover:text-foreground transition-colors">mcanaz1234@gmail.com</a>
                <form onSubmit={handleEmailSubmit} className="flex gap-4 pt-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz" 
                    className="flex-1 px-4 py-2 bg-foreground/5 border border-accent/10 rounded-lg focus:outline-none focus:border-foreground/20 transition-colors duration-300"
                  />
                  <button type="submit" className="px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">© 2024 Melih Canaz. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">Gizlilik Politikası</Link>
              <Link href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 