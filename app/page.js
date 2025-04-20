"use client";

import Link from "next/link";
import Layout from "./components/Layout";
import FadeInSection from "./components/FadeInSection";
import PromotionBanner from "./components/PromotionBanner";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll pozisyonu değiştikçe parallax efekti uygulayacak yardımcı fonksiyon
  const calculateParallax = (baseValue, factor) => {
    if (!isMounted) return baseValue;
    return baseValue - scrollPosition * factor;
  };

  return (
    <Layout>
      <main className="page-transition">
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          
          {/* Parallax Elementleri */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" 
              style={{ 
                top: calculateParallax(-100, 0.05), 
                left: calculateParallax(-200, 0.02),
                transform: `scale(${1 + scrollPosition * 0.001})` 
              }}
            ></div>
            <div 
              className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" 
              style={{ 
                top: calculateParallax(300, 0.07), 
                right: calculateParallax(-100, 0.04),
                transform: `scale(${1 + scrollPosition * 0.0005})` 
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="max-w-5xl mx-auto">
              <FadeInSection delay={200}>
                <p className="text-xl text-muted mb-8 fade-in">Merhaba, Ben Melih 👋</p>
              </FadeInSection>
              <FadeInSection delay={400}>
                <h1 className="text-7xl md:text-[120px] font-bold leading-tight mb-12 fade-in animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                  Full Stack <br/> Developer
                </h1>
              </FadeInSection>
              <FadeInSection delay={600}>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center fade-in">
                  <Link href="/portfolio" className="px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors hover:shadow-lg hover:-translate-y-1 transform duration-300">
                    Projelerimi İncele
                  </Link>
                  <p className="text-lg text-muted max-w-md">
                    Modern web teknolojileri ve yazılım geliştirme konusunda tutkulu bir geliştiriciyim.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <FadeInSection delay={200}>
          <section className="py-32 relative overflow-hidden">
            <div 
              className="absolute w-full h-24 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-indigo-600/10 blur-2xl -skew-y-6" 
              style={{ 
                top: calculateParallax(100, 0.1),
                transform: `translateY(${scrollPosition * 0.1}px) skewY(-6deg)` 
              }}
            ></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 relative inline-block">
                  Öne Çıkan Projeler
                  <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    {
                      number: "01",
                      title: "E-Ticaret Platformu",
                      category: "Full Stack Uygulama",
                      description: "Modern ve kullanıcı dostu bir e-ticaret platformu",
                      image: "bg-gradient-to-br from-purple-600 to-blue-600",
                      link: "https://github.com/Melihcnz/e-ticaret"
                    },
                    {
                      number: "02",
                      title: "İşletme Yönetim API",
                      category: "Backend API",
                      description: "Kapsamlı işletme yönetim sistemi API'si",
                      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
                      link: "https://github.com/Melihcnz/Isletme-Yonetim-Sistemi-API"
                    },
                    {
                      number: "03",
                      title: "WhatsApp Bot",
                      category: "Otomasyon Aracı",
                      description: "Otomatik mesaj yönetimi için WhatsApp bot",
                      image: "bg-gradient-to-br from-emerald-600 to-teal-600",
                      link: "https://github.com/Melihcnz/Whatsapp-bot"
                    },
                    {
                      number: "04",
                      title: "Stok Takip Sistemi",
                      category: "Yönetim Uygulaması",
                      description: "Kapsamlı stok ve envanter yönetim sistemi",
                      image: "bg-gradient-to-br from-orange-600 to-red-600",
                      link: "https://github.com/Melihcnz/stok-takip"
                    }
                  ].map((project, i) => (
                    <FadeInSection delay={400 + (i * 300)} key={i}>
                      <div className="group cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-500">
                        <div className={`h-[400px] ${project.image} bg-cover bg-center rounded-2xl mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white text-lg transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Projeyi İncele →</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-sm text-muted">{project.number}</span>
                          <div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-muted mb-2">{project.category}</p>
                            <p className="text-sm text-muted">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Services Section */}
        <FadeInSection delay={300}>
          <section className="py-32 relative">
            <div 
              className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl" 
              style={{ 
                transform: `translateY(${calculateParallax(0, 0.08)}px)` 
              }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Full Stack Geliştirici & Yazılım Uzmanı</h2>
                    <p className="text-lg text-muted">
                      Modern web teknolojileri ve yazılım geliştirme konusunda 2+ yıllık deneyim. 
                      JavaScript ekosistemi ve veritabanı yönetimi konularında uzmanlık.
                    </p>
                    <Link href="/portfolio" className="inline-flex items-center text-lg mt-8 hover-underline group">
                      <span>Daha Fazla Bilgi</span>
                      <span className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                  <div className="space-y-12">
                    {[
                      "Full Stack Web Geliştirme",
                      "RESTful API Tasarımı",
                      "Veritabanı Yönetimi",
                      "Frontend Geliştirme",
                      "Backend Sistemler"
                    ].map((service, i) => (
                      <FadeInSection delay={500 + (i * 200)} key={i}>
                        <div className="flex items-center gap-4 group">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 transform group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                        </div>
                      </FadeInSection>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Stats Section */}
        <FadeInSection delay={400}>
          <section className="py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { number: "20+", text: "Tamamlanan Proje" },
                    { number: "2+", text: "Yıl Deneyim" },
                    { number: "12+", text: "Teknoloji & Framework" }
                  ].map((stat, i) => (
                    <FadeInSection delay={600 + (i * 300)} key={i}>
                      <div className="text-center hover:scale-105 transition-transform duration-500 p-8 rounded-lg hover:bg-foreground/5">
                        <p className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{stat.number}</p>
                        <p className="text-lg text-muted">{stat.text}</p>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Contact Section */}
        <FadeInSection delay={500}>
          <section className="py-32 relative overflow-hidden">
            <div 
              className="absolute left-0 top-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl"
              style={{ 
                transform: `translate(${calculateParallax(-50, 0.1)}px, ${calculateParallax(0, 0.05)}px)` 
              }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Projeniz için İletişime Geçin</h2>
                <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
                  Yeni projeler ve iş birlikleri için her zaman açığım. Modern ve etkili çözümler 
                  geliştirmek için birlikte çalışalım.
                </p>
                <Link href="/portfolio#contact" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors hover:shadow-lg hover:scale-105 transform duration-300">
                  İletişime Geç →
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Kampanya Banner */}
        <PromotionBanner endDate="2024-08-15" />
      </main>
    </Layout>
  );
}
