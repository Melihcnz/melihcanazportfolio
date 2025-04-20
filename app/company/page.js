"use client";

import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import Link from "next/link";
import { useState } from "react";

export default function Company() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('E-posta:', email);
    setEmail('');
    // Burada abonelik mantığı gerçekleştirilebilir
  };
  
  const resources = [
    {
      title: "Blog Yazıları",
      description: "Yazılım geliştirme, web teknolojileri ve blockchain konularında detaylı makaleler.",
      items: [
        {
          title: "Modern Web Geliştirme Yaklaşımları",
          date: "15 Mart 2024",
          readTime: "10 dk",
          link: "#"
        },
        {
          title: "React ve Next.js ile SEO Optimizasyonu",
          date: "10 Mart 2024",
          readTime: "8 dk",
          link: "#"
        },
        {
          title: "TypeScript Best Practices",
          date: "5 Mart 2024",
          readTime: "12 dk",
          link: "#"
        }
      ]
    },
    {
      title: "Eğitim İçerikleri",
      description: "Yazılım geliştirme süreçlerini öğrenmek için kapsamlı eğitim materyalleri.",
      items: [
        {
          title: "Full Stack Development 101",
          duration: "20 saat",
          level: "Başlangıç",
          link: "#"
        },
        {
          title: "React ve Node.js ile Uygulama Geliştirme",
          duration: "15 saat",
          level: "Orta",
          link: "#"
        },
        {
          title: "API Tasarımı ve Güvenlik",
          duration: "10 saat",
          level: "İleri",
          link: "#"
        }
      ]
    },
    {
      title: "Açık Kaynak",
      description: "GitHub'da paylaşılan açık kaynak projeler ve katkıda bulunma rehberleri.",
      items: [
        {
          title: "React Component Library",
          stars: "250+",
          contributors: "15",
          link: "#"
        },
        {
          title: "Node.js Utility Functions",
          stars: "180+",
          contributors: "8",
          link: "#"
        },
        {
          title: "TypeScript Starter Template",
          stars: "120+",
          contributors: "5",
          link: "#"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <FadeInSection delay={200}>
                <h1 className="text-7xl font-bold mb-8">Kaynaklar</h1>
              </FadeInSection>
              <FadeInSection delay={400}>
                <p className="text-xl text-muted">
                  Yazılım geliştirme yolculuğunuzda size yardımcı olacak blog yazıları, 
                  eğitim içerikleri ve açık kaynak projeler.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-32">
              {resources.map((section, sectionIndex) => (
                <FadeInSection delay={300 + (sectionIndex * 200)} key={section.title}>
                  <div>
                    <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                    <p className="text-muted mb-12 max-w-2xl">{section.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {section.items.map((item, itemIndex) => (
                        <FadeInSection delay={500 + (itemIndex * 200)} key={item.title}>
                          <div className="group p-8 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <div className="space-y-2 mb-6">
                              {'date' in item && (
                                <>
                                  <p className="text-sm text-muted">{item.date}</p>
                                  <p className="text-sm text-muted">Okuma süresi: {item.readTime}</p>
                                </>
                              )}
                              {'duration' in item && (
                                <>
                                  <p className="text-sm text-muted">Süre: {item.duration}</p>
                                  <p className="text-sm text-muted">Seviye: {item.level}</p>
                                </>
                              )}
                              {'stars' in item && (
                                <>
                                  <p className="text-sm text-muted">⭐ {item.stars}</p>
                                  <p className="text-sm text-muted">👥 {item.contributors} katkıda bulunan</p>
                                </>
                              )}
                            </div>
                            <Link 
                              href={item.link}
                              className="inline-flex items-center text-sm group-hover:text-foreground transition-colors"
                            >
                              Daha Fazla Bilgi →
                            </Link>
                          </div>
                        </FadeInSection>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <FadeInSection delay={600}>
          <section className="py-32 bg-foreground/5">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-bold">Güncel Kalın</h2>
                <p className="text-muted">
                  Yeni blog yazıları, eğitim içerikleri ve proje güncellemelerinden haberdar olun.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz" 
                    className="flex-1 px-6 py-4 bg-foreground/5 rounded-xl focus:outline-none focus:bg-foreground/10 transition-colors"
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
                  >
                    Abone Ol
                  </button>
                </form>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </Layout>
  );
} 