"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // E-posta gönderme işlemi burada yapılacak
    console.log('E-posta:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed w-full z-50">
        <nav className="backdrop-blur-sm bg-black/20">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-24 px-4 md:px-8">
              <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-50 transition-opacity">
                MC™
              </Link>
              <div className="hidden md:flex items-center gap-12">
                <Link href="/" className="nav-link text-sm tracking-wide">Ana Sayfa</Link>
                <Link href="/portfolio" className="nav-link text-sm tracking-wide">Projeler</Link>
                <Link href="/launches" className="nav-link text-sm tracking-wide">Hizmetler</Link>
                <Link href="/company" className="nav-link text-sm tracking-wide">Kaynaklar</Link>
              </div>
              <button className="text-sm px-6 py-2.5 border rounded-full hover:bg-white hover:text-black transition-all duration-300 nav-button">
                İletişime Geç
              </button>
            </div>
          </div>
        </nav>
      </header>

      {children}

      {/* Footer */}
      <footer className="py-10">
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
                <Link href="/launches" className="text-sm text-muted hover:text-foreground transition-colors">Hizmetler</Link>
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
                    className="flex-1 px-4 py-2 bg-white/5 border border-accent/10 rounded-lg focus:outline-none focus:border-foreground/20"
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