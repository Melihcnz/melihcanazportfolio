"use client";

import Link from "next/link";
import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import { useState } from "react";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly"); // "monthly" veya "yearly"

  const toggleBillingType = () => {
    setBillingType(billingType === "monthly" ? "yearly" : "monthly");
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
      recommended: false
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
      recommended: true
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
      recommended: false
    }
  ];

  return (
    <Layout>
      <main className="page-transition">
        <section className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <FadeInSection delay={200}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Restoran Yönetim Sistemi Fiyatlandırma</h1>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                  İşletmenizin büyüklüğüne ve ihtiyaçlarınıza göre özelleştirilmiş çözümler. 
                  İhtiyaçlarınıza en uygun planı seçin.
                </p>
              </FadeInSection>

              {/* Fiyatlandırma Tipi Seçici */}
              <FadeInSection delay={300}>
                <div className="flex items-center justify-center mt-10 mb-12">
                  <span className={`text-sm ${billingType === "monthly" ? "text-foreground" : "text-muted"}`}>Aylık</span>
                  <button 
                    className="mx-4 relative w-14 h-7 rounded-full bg-accent flex items-center p-1 cursor-pointer transition-colors duration-300"
                    onClick={toggleBillingType}
                    aria-label="Faturalama tipini değiştir"
                  >
                    <span 
                      className={`w-5 h-5 rounded-full bg-foreground transform transition-transform duration-300 ${billingType === "yearly" ? "translate-x-7" : ""}`} 
                    />
                  </button>
                  <span className={`text-sm ${billingType === "yearly" ? "text-foreground" : "text-muted"}`}>Yıllık <span className="text-emerald-500 font-medium">%20 İndirim</span></span>
                </div>
              </FadeInSection>
              
              {/* Fiyatlandırma Kartları */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {pricingPlans.map((plan, index) => (
                  <FadeInSection delay={400 + (index * 200)} key={index}>
                    <div className="price-card relative h-full flex flex-col">
                      <div className="price-card-header">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted text-sm">{plan.description}</p>
                      </div>
                      <div className="price-card-body flex-1 flex flex-col">
                        <div className="mb-8">
                          <span className="price-tag">{plan.price} ₺</span>
                          <span className="text-muted">/{billingType === "monthly" ? "ay" : "yıl"}</span>
                        </div>
                        <ul className="feature-list space-y-3 mb-auto">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <a 
                            href={plan.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block w-full text-center py-3 rounded-lg font-medium transition-colors duration-300 bg-foreground text-background hover:bg-foreground/90"
                          >
                            Demo İncele
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Özellikler Karşılaştırma Tablosu */}
        <FadeInSection delay={600}>
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Özellik Karşılaştırması</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-accent">
                        <th className="text-left py-4 px-4">Özellik</th>
                        <th className="text-center py-4 px-4">Başlangıç</th>
                        <th className="text-center py-4 px-4">Profesyonel</th>
                        <th className="text-center py-4 px-4">Kurumsal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Masa Yönetimi", starter: true, professional: true, enterprise: true },
                        { name: "Menü Yönetimi", starter: true, professional: true, enterprise: true },
                        { name: "Sipariş Takibi", starter: true, professional: true, enterprise: true },
                        { name: "Mobil Uyumluluk", starter: true, professional: true, enterprise: true },
                        { name: "Müşteri Veri Tabanı", starter: true, professional: true, enterprise: true },
                        { name: "Rezervasyon Sistemi", starter: false, professional: true, enterprise: true },
                        { name: "Stok Takibi", starter: false, professional: true, enterprise: true },
                        { name: "Çoklu Şube Desteği", starter: false, professional: true, enterprise: true },
                        { name: "Raporlama", starter: "Temel", professional: "Gelişmiş", enterprise: "Kapsamlı" },
                        { name: "Müşteri Sadakat Programı", starter: false, professional: false, enterprise: true },
                        { name: "API Entegrasyonu", starter: false, professional: false, enterprise: true },
                        { name: "Özel Geliştirmeler", starter: false, professional: false, enterprise: true },
                        { name: "Teknik Destek", starter: "E-posta", professional: "7/24 Öncelikli", enterprise: "Tam Kapsamlı" }
                      ].map((feature, i) => (
                        <tr key={i} className="border-b border-accent/50">
                          <td className="py-4 px-4">{feature.name}</td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.starter === 'boolean' 
                              ? (feature.starter 
                                ? <span className="text-green-500">✓</span> 
                                : <span className="text-red-500">✗</span>)
                              : feature.starter}
                          </td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.professional === 'boolean' 
                              ? (feature.professional 
                                ? <span className="text-green-500">✓</span> 
                                : <span className="text-red-500">✗</span>)
                              : feature.professional}
                          </td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.enterprise === 'boolean' 
                              ? (feature.enterprise 
                                ? <span className="text-green-500">✓</span> 
                                : <span className="text-red-500">✗</span>)
                              : feature.enterprise}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* SSS Bölümü */}
        <FadeInSection delay={700}>
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Sık Sorulan Sorular</h2>
                <div className="space-y-8">
                  {[
                    {
                      question: "Paketi satın aldıktan sonra güncellemeler ücretli mi?",
                      answer: "Hayır, satın aldığınız paket süresi boyunca tüm güncellemelerden ücretsiz olarak yararlanabilirsiniz."
                    },
                    {
                      question: "Özel geliştirme talep edebilir miyim?",
                      answer: "Evet, işletmenizin özel ihtiyaçlarına göre ek geliştirmeler yapabiliyoruz. Profesyonel ve Kurumsal paketlerde bu hizmet ek ücrete tabiyken, Kurumsal pakette belirli saate kadar olan özel geliştirmeler paket dahilindedir."
                    },
                    {
                      question: "Sisteme veri taşıma desteği sunuyor musunuz?",
                      answer: "Evet, mevcut sisteminizden veri aktarımı için tüm paketlerimizde kurulum desteği sağlıyoruz. Veri miktarı ve karmaşıklığına göre ek ücret talep edilebilir."
                    },
                    {
                      question: "Kurulum süreci ne kadar zaman alır?",
                      answer: "Temel kurulum genellikle 1-2 iş günü içinde tamamlanır. Özel geliştirmeler ve yoğun veri aktarımı gerektiren durumlarda süreç 1-2 hafta alabilir."
                    },
                    {
                      question: "Ödeme yöntemleri nelerdir?",
                      answer: "Kredi kartı, banka havalesi ve çevrimiçi ödeme sistemlerini kabul ediyoruz. Yıllık ödemelerde %20 indirim sunuyoruz."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-accent/30 pb-6">
                      <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                      <p className="text-muted">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* İletişim CTA */}
        <FadeInSection delay={800}>
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center bg-accent/10 rounded-2xl p-12">
                <h2 className="text-3xl font-bold mb-6">Hala sorularınız mı var?</h2>
                <p className="text-lg text-muted mb-8">
                  İhtiyaçlarınıza en uygun paketi seçmenize yardımcı olalım. Size özel demo gösterimi için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/Melihcnz/RestoranWEB" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                  >
                    GitHub'da İncele
                  </a>
                  <Link 
                    href="/portfolio#contact" 
                    className="px-8 py-4 border border-accent rounded-full hover:bg-foreground hover:text-background transition-colors"
                  >
                    İletişime Geçin
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
    </Layout>
  );
} 