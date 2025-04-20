"use client";

import Link from "next/link";
import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import PromotionBanner from "../components/PromotionBanner";
import { useState, useEffect, useRef } from "react";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly"); // "monthly" veya "yearly"
  const [activeTab, setActiveTab] = useState(1); // Aktif plan sekmesi (mobil görünüm için)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const faqRefs = useRef([]);
  const featureTableRef = useRef(null);
  const pricingCardsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Scroll reveal animasyonları için
      const scrollItems = document.querySelectorAll('.scroll-reveal');
      scrollItems.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.85;
        
        if (isInView) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Başlangıç kontrolü
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fiyat tipi değiştirme işlevi
  const toggleBillingType = () => {
    // Toggle animasyonu için
    const toggleElement = document.querySelector('.billing-toggle-thumb');
    if (toggleElement) {
      toggleElement.classList.add('animate-toggle');
      setTimeout(() => {
        toggleElement.classList.remove('animate-toggle');
      }, 500);
    }
    
    setBillingType(billingType === "monthly" ? "yearly" : "monthly");
  };

  // Fiyat değişiminde animasyon
  const getAnimatedPrice = (monthly, yearly) => {
    const price = billingType === "monthly" ? monthly : yearly;
    return (
      <span className="price-change-animation">{price}</span>
    );
  };

  // FAQ toggle fonksiyonu
  const toggleFaq = (index) => {
    if (faqRefs.current[index]) {
      faqRefs.current[index].classList.toggle('faq-open');
    }
  };

  // Fiyatlandırma paketleri
  const pricingPlans = [
    {
      name: "Başlangıç",
      description: "Küçük restoranlar için ideal çözüm",
      price: billingType === "monthly" ? 349 : 3499,
      features: [
        "Temel masa ve menü yönetimi",
        "Sipariş takibi",
        "Mobil uyumluluk",
        "Müşteri veri tabanı",
        "E-posta desteği"
      ],
      link: "https://github.com/Melihcnz/RestoranWEB",
      recommended: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Profesyonel",
      description: "Orta ölçekli işletmeler için tam donanımlı çözüm",
      price: billingType === "monthly" ? 749 : 7499,
      features: [
        "Gelişmiş masa ve menü yönetimi",
        "Gerçek zamanlı sipariş takibi",
        "Rezervasyon sistemi",
        "Stok takibi",
        "Raporlama araçları",
        "Çoklu şube desteği",
        "7/24 öncelikli destek"
      ],
      link: "https://github.com/Melihcnz/RestoranWEB",
      recommended: true,
      color: "from-indigo-600 to-purple-500"
    },
    {
      name: "Kurumsal",
      description: "Büyük restoran zincirleri için özel çözüm",
      price: billingType === "monthly" ? 1499 : 14999,
      features: [
        "Tüm Profesyonel özellikleri",
        "Müşteri sadakat programı",
        "Gelişmiş analitik ve raporlar",
        "API entegrasyonu",
        "Özel geliştirmeler",
        "Özel eğitim ve danışmanlık",
        "Tam kapsamlı bakım ve destek",
        "SLA garantisi"
      ],
      link: "https://github.com/Melihcnz/RestoranWEB",
      recommended: false,
      color: "from-purple-600 to-pink-500"
    }
  ];

  // SSS sorular
  const faqItems = [
    {
      question: "Hangi planı seçmeliyim?",
      answer: "İşletmenizin büyüklüğüne ve ihtiyaçlarınıza bağlıdır. Küçük bir işletme için Başlangıç planı yeterli olabilir, orta ölçekli işletmeler için Profesyonel plan önerilir, birden fazla şubesi olan büyük işletmeler için ise Kurumsal plan en uygunudur."
    },
    {
      question: "Fiyatlara KDV dahil mi?",
      answer: "Belirtilen tüm fiyatlara KDV dahildir. Faturanızda KDV detayı ayrıca gösterilecektir."
    },
    {
      question: "Paketimi daha sonra yükseltebilir miyim?",
      answer: "Evet, ihtiyaçlarınız değiştikçe paketinizi istediğiniz zaman yükseltebilirsiniz. Yükseltme sırasında kalan sürenizin bedeli yeni paketin fiyatından düşülecektir."
    },
    {
      question: "Deneme sürümü var mı?",
      answer: "Evet, tüm paketlerimiz için 14 günlük ücretsiz deneme sürümü sunuyoruz. Bu süre içinde tüm özellikleri test edebilir ve işletmenize uygunluğunu değerlendirebilirsiniz."
    },
    {
      question: "Özel ihtiyaçlarım için özelleştirme yapabilir misiniz?",
      answer: "Evet, özellikle Kurumsal paketimizde özel ihtiyaçlarınıza yönelik özelleştirmeler yapabiliyoruz. Detaylı bilgi için satış ekibimizle iletişime geçebilirsiniz."
    }
  ];

  // Karşılaştırma özellikleri
  const comparisonFeatures = [
    { name: "Masa ve Sipariş Yönetimi", starter: true, pro: true, enterprise: true },
    { name: "Menü Yönetimi", starter: true, pro: true, enterprise: true },
    { name: "Mobil Uyumluluk", starter: true, pro: true, enterprise: true },
    { name: "Çoklu Şube Desteği", starter: false, pro: true, enterprise: true },
    { name: "Rezervasyon Sistemi", starter: false, pro: true, enterprise: true },
    { name: "Müşteri Veri Tabanı", starter: true, pro: true, enterprise: true },
    { name: "Stok Yönetimi", starter: false, pro: true, enterprise: true },
    { name: "Analitik Raporlama", starter: false, pro: true, enterprise: true },
    { name: "Mobil Uygulama", starter: false, pro: false, enterprise: true },
    { name: "API Entegrasyonu", starter: false, pro: false, enterprise: true },
    { name: "7/24 Destek", starter: false, pro: true, enterprise: true },
    { name: "SLA Garantisi", starter: false, pro: false, enterprise: true },
  ];

  return (
    <Layout>
      <main className="page-transition">
        <section className="pt-32 pb-16 min-h-screen relative overflow-hidden">
          {/* Arka plan efektleri */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div 
              className="absolute w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" 
              style={{ 
                top: isMounted ? -100 - scrollPosition * 0.05 : -100, 
                left: isMounted ? -200 - scrollPosition * 0.02 : -200
              }}
            ></div>
            <div 
              className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" 
              style={{ 
                bottom: isMounted ? 100 - scrollPosition * 0.03 : 100, 
                right: isMounted ? -150 - scrollPosition * 0.01 : -150
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <FadeInSection delay={200}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">Restoran Yönetim Sistemi Fiyatlandırma</h1>
                <p className="text-lg text-muted max-w-3xl mx-auto scroll-reveal">
                  İşletmenizin büyüklüğüne ve ihtiyaçlarınıza göre özelleştirilmiş çözümler. 
                  İhtiyaçlarınıza en uygun planı seçin.
                </p>
              </FadeInSection>

              {/* Fiyatlandırma Tipi Seçici */}
              <FadeInSection delay={300}>
                <div className="flex items-center justify-center mt-10 mb-12">
                  <span className={`text-sm font-medium transition-colors duration-300 ${billingType === "monthly" ? "text-foreground" : "text-muted"}`}>Aylık</span>
                  <button 
                    className="mx-4 relative w-16 h-8 rounded-full bg-accent/50 hover:bg-accent/70 flex items-center px-1 cursor-pointer transition-colors duration-300"
                    onClick={toggleBillingType}
                    aria-label="Faturalama tipini değiştir"
                  >
                    <span 
                      className={`billing-toggle-thumb w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md transform transition-transform duration-500 ${billingType === "yearly" ? "translate-x-8" : "translate-x-0"}`} 
                    />
                  </button>
                  <div className="flex flex-col items-start">
                    <span className={`text-sm font-medium transition-colors duration-300 ${billingType === "yearly" ? "text-foreground" : "text-muted"}`}>Yıllık</span>
                    <span className="text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">%20 İndirim</span>
                  </div>
                </div>
              </FadeInSection>
              
              {/* Mobil görünüm sekmeleri (küçük ekranlar için) */}
              <div className="md:hidden flex justify-center gap-2 mb-8">
                {pricingPlans.map((plan, index) => (
                  <button
                    key={`tab-${index}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === index ? 'bg-foreground text-background' : 'bg-foreground/10'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
              
              {/* Fiyatlandırma Kartları */}
              <div ref={pricingCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {pricingPlans.map((plan, index) => (
                  <FadeInSection delay={400 + (index * 200)} key={index}>
                    <div 
                      className={`pricing-card-shine relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl 
                                 md:opacity-100 md:block ${activeTab === index ? 'opacity-100' : 'hidden md:opacity-60'} 
                                 ${plan.recommended ? 'border-2 border-indigo-500 shadow-lg scale-105 md:scale-105 z-10' : 'border border-accent'}`}
                    >
                      {/* Gradient overlay ve glowing efekt */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 transition-opacity duration-300 hover:opacity-10`}></div>
                      
                      {/* Önerilen badge */}
                      {plan.recommended && (
                        <div className="absolute top-0 right-0">
                          <div className="popular-badge bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-medium shadow-md">
                            Önerilen
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6 border-b border-accent">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted text-sm">{plan.description}</p>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-8 flex items-end">
                          <span className="text-4xl font-bold price-animation">
                            {plan.price} ₺
                          </span>
                          <span className="text-muted ml-2">/{billingType === "monthly" ? "ay" : "yıl"}</span>
                        </div>
                        
                        <ul className="space-y-3 mb-auto">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="feature-check inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs mr-3 mt-0.5 flex-shrink-0">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-8">
                          <a 
                            href={plan.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`pricing-cta group block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300
                                      ${plan.recommended 
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg' 
                                        : 'bg-foreground text-background hover:bg-foreground/90'}`}
                          >
                            Demo İncele
                            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
              
              {/* Özellik Karşılaştırma Tablosu */}
              <FadeInSection delay={1000}>
                <div className="mt-32 mb-24 overflow-hidden scroll-reveal" ref={featureTableRef}>
                  <h2 className="text-3xl font-bold mb-12 text-center">Plan Özelliklerini Karşılaştırın</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-left">
                          <th className="py-4 px-4 border-b border-accent">Özellik</th>
                          <th className="py-4 px-4 border-b border-accent text-center">Başlangıç</th>
                          <th className="py-4 px-4 border-b border-accent text-center relative">
                            <span className="feature-badge absolute top-0 right-4 -mt-2 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full">Önerilen</span>
                            Profesyonel
                          </th>
                          <th className="py-4 px-4 border-b border-accent text-center">Kurumsal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((feature, index) => (
                          <tr key={index} className="pricing-row hover:bg-foreground/5 transition-all duration-300">
                            <td className="py-3 px-4 border-b border-accent/50">{feature.name}</td>
                            <td className="py-3 px-4 border-b border-accent/50 text-center">
                              {feature.starter ? (
                                <span className="feature-check inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white mx-auto">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-accent mx-auto">-</span>
                              )}
                            </td>
                            <td className="py-3 px-4 border-b border-accent/50 text-center">
                              {feature.pro ? (
                                <span className="feature-check inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white mx-auto">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-accent mx-auto">-</span>
                              )}
                            </td>
                            <td className="py-3 px-4 border-b border-accent/50 text-center">
                              {feature.enterprise ? (
                                <span className="feature-check inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mx-auto">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-accent mx-auto">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeInSection>
              
              {/* Sık Sorulan Sorular */}
              <FadeInSection delay={1200}>
                <div className="my-24 max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-12 text-center">Sık Sorulan Sorular</h2>
                  
                  <div className="space-y-6">
                    {faqItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="border border-accent rounded-xl overflow-hidden"
                        ref={el => faqRefs.current[index] = el}
                      >
                        <button 
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-foreground/5 transition-colors duration-300"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium">{item.question}</span>
                          <span className="faq-icon transition-transform duration-300 text-xl">↓</span>
                        </button>
                        <div className="faq-content max-h-0 overflow-hidden transition-all duration-500">
                          <div className="px-6 py-4 bg-foreground/5 text-muted">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
              
              {/* CTA Bölümü */}
              <FadeInSection delay={1400}>
                <div className="mt-24 mb-12 text-center max-w-3xl mx-auto scroll-reveal plan-switch-appear">
                  <div className="p-8 rounded-2xl bg-gradient-to-b from-foreground/10 to-transparent border border-accent">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Restoran Yönetim Sisteminizi Hemen Kullanmaya Başlayın</h2>
                    <p className="text-muted mb-8">14 günlük ücretsiz deneme ile tüm özellikleri test edin, risk yok!</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://github.com/Melihcnz/RestoranWEB" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pricing-cta bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Ücretsiz Demo Başlatın
                      </a>
                      <a 
                        href="#" 
                        className="bg-foreground/10 hover:bg-foreground/20 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        Detaylı Bilgi Alın
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
        
        {/* Kampanya Banner */}
        <PromotionBanner endDate="2024-08-15" />
      </main>
    </Layout>
  );
} 