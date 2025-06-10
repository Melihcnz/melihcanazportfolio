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
        {/* Hero Section with Enhanced Design */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Enhanced Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/5 via-background to-purple-50/5"></div>
          
          {/* Enhanced Parallax Elementleri */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-3xl" 
              style={{ 
                top: calculateParallax(-150, 0.05), 
                left: calculateParallax(-250, 0.02),
                transform: `scale(${1 + scrollPosition * 0.001}) rotate(${scrollPosition * 0.1}deg)` 
              }}
            ></div>
            <div 
              className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 blur-3xl" 
              style={{ 
                top: calculateParallax(250, 0.07), 
                right: calculateParallax(-150, 0.04),
                transform: `scale(${1 + scrollPosition * 0.0005}) rotate(-${scrollPosition * 0.05}deg)` 
              }}
            ></div>
            <div 
              className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-emerald-600/8 to-teal-600/8 blur-2xl" 
              style={{ 
                bottom: calculateParallax(100, 0.03), 
                left: calculateParallax(200, 0.06),
                transform: `scale(${1 + scrollPosition * 0.0008})` 
              }}
            ></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-4 h-4 bg-indigo-400/30 rounded rotate-45 floating-element"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400/40 rounded floating-element" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
            <div className="max-w-6xl mx-auto text-center md:text-left">
              <FadeInSection delay={200}>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-8 fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center">
                    <span className="text-white text-sm">👋</span>
                  </div>
                  <p className="text-lg md:text-xl text-muted font-medium">Merhaba, Ben Melih</p>
                  <div className="px-3 py-1 bg-emerald-400/10 text-emerald-600 rounded-full text-xs md:text-sm font-medium">Available for work</div>
                </div>
              </FadeInSection>
              <FadeInSection delay={400}>
                <h1 className="text-4xl md:text-6xl lg:text-[100px] xl:text-[120px] font-bold leading-[0.9] mb-8 fade-in">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600 animate-gradient">
                    Full Stack
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-600 to-foreground animate-gradient">
                    Developer
                  </span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={600}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-3xl mx-auto md:mx-0 mb-12 leading-relaxed fade-in">
                  Modern web teknolojileri ile <span className="text-foreground font-medium">yenilikçi çözümler</span> üreten, 
                  <span className="text-foreground font-medium"> kullanıcı deneyimini</span> ön planda tutan Full Stack geliştirici.
                </p>
              </FadeInSection>
              <FadeInSection delay={800}>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start md:items-center justify-center md:justify-start fade-in">
                  <Link href="/portfolio" className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-600/25 hover:-translate-y-1">
                    <span className="relative z-10">Projelerimi İncele</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link href="/pricing" className="group px-6 md:px-8 py-3 md:py-4 border-2 border-foreground/20 text-foreground rounded-2xl font-medium transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
                    Fiyatlandırma
                  </Link>
                  <a 
                    href="/api/download-cv"
                    download="Melih_Canaz_CV.txt"
                    className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/25 hover:-translate-y-1 flex items-center gap-2"
                  >
                    📄 CV İndir
                  </a>
                  <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0 sm:ml-auto">
                    <div className="text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-xs md:text-sm">Yeni projeler için müsait</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Aşağı kaydır</span>
              <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Enhanced */}
        <FadeInSection delay={200}>
          <section className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent">
            <div 
              className="absolute w-full h-32 bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-600/15 blur-3xl -skew-y-3" 
              style={{ 
                top: calculateParallax(150, 0.1),
                transform: `translateY(${scrollPosition * 0.1}px) skewY(-3deg) scale(${1 + scrollPosition * 0.0002})` 
              }}
            ></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                  <FadeInSection delay={300}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/10 border border-indigo-200/20 rounded-full mb-6">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      <span className="text-sm font-medium text-indigo-600">Öne Çıkan Çalışmalar</span>
                    </div>
                  </FadeInSection>
                  <FadeInSection delay={400}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600">
                        Projelerim
                      </span>
                    </h2>
                  </FadeInSection>
                  <FadeInSection delay={500}>
                    <p className="text-xl text-muted max-w-3xl mx-auto">
                      Modern teknolojiler kullanarak geliştirdiğim <span className="text-foreground font-medium">etkili çözümler</span> ve 
                      <span className="text-foreground font-medium"> kullanıcı odaklı uygulamalar</span>
                    </p>
                  </FadeInSection>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-0">
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
                    <FadeInSection delay={600 + (i * 200)} key={i}>
                      <div className="group cursor-pointer transition-all duration-500 hover:-translate-y-1">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                          <div className={`h-[350px] ${project.image} bg-cover bg-center relative overflow-hidden`}>
                            {/* Project Number Badge */}
                            <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-black text-sm">
                              {project.number}
                            </div>
                            
                            {/* Tech Stack Icons */}
                            <div className="absolute top-6 right-6 flex gap-2">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs">JS</span>
                              </div>
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs">💻</span>
                              </div>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                              <div className="p-6 w-full">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                      <span className="text-sm">🚀</span>
                                    </div>
                                    <span className="text-white font-medium">Projeyi İncele</span>
                                  </div>
                                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <span className="text-white">→</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="px-3 py-1 bg-indigo-100/10 text-indigo-400 rounded-full text-xs font-medium">
                                {project.category}
                              </div>
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-xs text-muted">2024</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-muted leading-relaxed mb-6">
                              {project.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                                  <span className="text-white text-xs">⭐</span>
                                </div>
                                <span className="text-sm text-muted">Featured Project</span>
                              </div>
                              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                                Detaylar →
                              </button>
                            </div>
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

        {/* Enhanced Services Section */}
        <FadeInSection delay={300}>
          <section className="py-32 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div 
              className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/5 blur-3xl" 
              style={{ 
                transform: `translateY(${calculateParallax(0, 0.08)}px) rotate(${scrollPosition * 0.02}deg)` 
              }}
            ></div>
            <div 
              className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/8 to-blue-600/5 blur-2xl" 
              style={{ 
                transform: `translateY(${calculateParallax(50, 0.06)}px)` 
              }}
            ></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="order-2 lg:order-1">
                    <FadeInSection delay={400}>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/10 border border-purple-200/20 rounded-full mb-8">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-sm font-medium text-purple-600">Uzmanlık Alanlarım</span>
                      </div>
                    </FadeInSection>
                    
                    <FadeInSection delay={500}>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-purple-600 to-indigo-600">
                          Full Stack
                        </span>
                        <br />
                        <span className="text-foreground">Geliştirici</span>
                      </h2>
                    </FadeInSection>
                    
                    <FadeInSection delay={600}>
                      <p className="text-xl text-muted mb-8 leading-relaxed">
                        Modern web teknolojileri ve yazılım geliştirme konusunda <span className="text-foreground font-medium">2+ yıllık deneyim</span>. 
                        JavaScript ekosistemi ve veritabanı yönetimi konularında <span className="text-foreground font-medium">derinlemesine uzmanlık</span>.
                      </p>
                    </FadeInSection>
                    
                    <FadeInSection delay={700}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/portfolio" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/25 hover:-translate-y-1">
                          <span className="mr-2">Portföyümü İncele</span>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                        <Link href="/company" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground rounded-2xl font-medium transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
                          <span className="mr-2">Hakkımda</span>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                      </div>
                    </FadeInSection>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="space-y-6">
                      {[
                        { icon: "🚀", title: "Full Stack Web Geliştirme", desc: "Modern JavaScript framework'leri ile end-to-end çözümler" },
                        { icon: "🔗", title: "RESTful API Tasarımı", desc: "Ölçeklenebilir ve güvenli backend sistemleri" },
                        { icon: "💾", title: "Veritabanı Yönetimi", desc: "SQL ve NoSQL veritabanı optimizasyonu" },
                        { icon: "🎨", title: "Frontend Geliştirme", desc: "Kullanıcı dostu ve responsive arayüzler" },
                        { icon: "⚙️", title: "Backend Sistemler", desc: "Performanslı ve güvenli sunucu tarafı uygulamalar" }
                      ].map((service, i) => (
                        <FadeInSection delay={800 + (i * 150)} key={i}>
                          <div className="group p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                                  {service.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                  {service.desc}
                                </p>
                              </div>
                              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-indigo-400">→</span>
                              </div>
                            </div>
                          </div>
                        </FadeInSection>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Enhanced Stats Section */}
        <FadeInSection delay={400}>
          <section className="py-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-32 h-32 border border-indigo-200/20 rounded-2xl rotate-12"></div>
              <div className="absolute top-40 right-20 w-24 h-24 border border-purple-200/20 rounded-full"></div>
              <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-cyan-200/20 rounded-xl rotate-45"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <FadeInSection delay={500}>
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100/10 to-purple-100/10 border border-indigo-200/20 rounded-full mb-6">
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                      <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Başarılarım</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600">
                        Rakamlarla Deneyimim
                      </span>
                    </h2>
                  </div>
                </FadeInSection>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { number: "20+", text: "Tamamlanan Proje", desc: "Başarıyla teslim edilen", icon: "🚀" },
                    { number: "2+", text: "Yıl Deneyim", desc: "Aktif geliştirme süreci", icon: "⏱️" },
                    { number: "12+", text: "Teknoloji & Framework", desc: "Kullandığım araçlar", icon: "🛠️" }
                  ].map((stat, i) => (
                    <FadeInSection delay={700 + (i * 200)} key={i}>
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center backdrop-blur-sm">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <p className="text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-500">
                            {stat.number}
                          </p>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                            {stat.text}
                          </h3>
                          <p className="text-sm text-muted">
                            {stat.desc}
                          </p>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Enhanced Contact Section */}
        <FadeInSection delay={500}>
          <section className="py-32 relative overflow-hidden">
            {/* Enhanced Background */}
            <div 
              className="absolute left-0 top-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-3xl"
              style={{ 
                transform: `translate(${calculateParallax(-100, 0.1)}px, ${calculateParallax(0, 0.05)}px) rotate(${scrollPosition * 0.02}deg)` 
              }}
            ></div>
            <div 
              className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 blur-2xl"
              style={{ 
                transform: `translate(${calculateParallax(50, 0.08)}px, ${calculateParallax(20, 0.06)}px)` 
              }}
            ></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <FadeInSection delay={600}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100/10 to-cyan-100/10 border border-emerald-200/20 rounded-full mb-8">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-600">Projenize başlamaya hazırım</span>
                    </div>
                  </FadeInSection>
                  
                  <FadeInSection delay={700}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-emerald-600 to-cyan-600">
                        Hayallerinizdeki Projeyi
                      </span>
                      <br />
                      <span className="text-foreground">Birlikte Gerçekleştirelim</span>
                    </h2>
                  </FadeInSection>
                  
                  <FadeInSection delay={800}>
                    <p className="text-xl text-muted mb-12 max-w-4xl mx-auto leading-relaxed">
                      <span className="text-foreground font-medium">Yenilikçi fikirlerinizi</span> modern teknolojilerle hayata geçirmek, 
                      <span className="text-foreground font-medium"> kullanıcı deneyimini</span> ön planda tutarak 
                      <span className="text-foreground font-medium">etkili çözümler</span> üretmek için buradayım.
                    </p>
                  </FadeInSection>
                </div>
                
                <FadeInSection delay={900}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <Link href="/portfolio#contact" className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/25 hover:-translate-y-2">
                      <span className="relative z-10 flex items-center gap-3">
                        <span>🚀</span>
                        <span>Projeye Başlayalım</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    
                    <Link href="/pricing" className="group px-10 py-5 border-2 border-foreground/20 text-foreground rounded-2xl font-medium text-lg transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background flex items-center gap-3">
                      <span>💰</span>
                      <span>Fiyatlandırma</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={1000}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                      { icon: "⚡", title: "Hızlı Başlangıç", desc: "24 saat içinde proje planlaması" },
                      { icon: "🛡️", title: "Güvenli Geliştirme", desc: "En iyi güvenlik uygulamaları" },
                      { icon: "📞", title: "7/24 Destek", desc: "Sürekli iletişim ve güncellemeler" }
                    ].map((feature, i) => (
                      <div key={i} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeInSection>
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
