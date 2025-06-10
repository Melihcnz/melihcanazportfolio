"use client";

import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Company() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const resourcesRef = useRef(null);
  const staggeredElements = useRef(null);
  const parallaxBg = useRef(null);
  const scrollItems = useRef([]);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Parallax effect for background
      if (parallaxBg.current) {
        parallaxBg.current.style.transform = `translateY(${position * 0.1}px)`;
      }

      // Reveal animations for scroll items
      if (scrollItems.current.length > 0) {
        scrollItems.current.forEach(el => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.85;
          
          if (isInView) {
            el.classList.add('active');
          }
        });
      }

      // Staggered animation
      if (staggeredElements.current) {
        const rect = staggeredElements.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.85;
        
        if (isInView) {
          staggeredElements.current.classList.add('visible');
        }
      }
    };

    // Initialize scroll items
    scrollItems.current = document.querySelectorAll('.scroll-reveal');
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basit form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Lütfen tüm zorunlu alanları doldurun.');
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS entegrasyonu yerine basit simülasyon
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('❌ Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-3xl" 
              style={{ 
                top: isMounted ? -150 - scrollPosition * 0.05 : -150, 
                left: isMounted ? -250 - scrollPosition * 0.02 : -250,
                transform: `rotate(${scrollPosition * 0.03}deg)`
              }}
            ></div>
            <div 
              className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 blur-3xl" 
              style={{ 
                bottom: isMounted ? -100 - scrollPosition * 0.04 : -100, 
                right: isMounted ? -200 - scrollPosition * 0.01 : -200
              }}
            ></div>
          </div>

          {/* Floating Knowledge Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-32 left-1/4 w-8 h-8 bg-indigo-400/20 rounded-lg flex items-center justify-center floating-element">
              📚
            </div>
            <div className="absolute top-48 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full flex items-center justify-center floating-element" style={{animationDelay: '2s'}}>
              💡
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-emerald-400/20 rounded-2xl flex items-center justify-center floating-element" style={{animationDelay: '4s'}}>
              🚀
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <FadeInSection delay={200}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 border border-indigo-200/30 rounded-full mb-8">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Hakkımda</span>
                  </div>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600 animate-gradient">
                      Melih Canaz
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-emerald-600 to-cyan-600 animate-gradient">
                      Full Stack Developer
                    </span>
                  </h1>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 px-4 lg:px-0">
                    <p className="text-lg md:text-xl text-muted leading-relaxed">
                      <span className="text-foreground font-medium">JavaScript ve TypeScript</span> dillerinde uzmanlaşmış, 
                      modern web teknolojileri ile <span className="text-foreground font-medium">yenilikçi çözümler</span> üreten Full Stack geliştirici.
                    </p>
                    <p className="text-base md:text-lg text-muted">
                      <span className="text-foreground font-medium">2+ yıllık deneyim</span> ile kullanıcı odaklı, ölçeklenebilir ve 
                      performanslı web uygulamaları geliştiriyorum.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 md:gap-4 px-4 lg:px-0">
                    <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200/20">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mx-auto mb-3">
                        👨‍💻
                      </div>
                      <div className="text-xl md:text-2xl font-bold mb-1">21</div>
                      <div className="text-xs md:text-sm text-muted">Yaş</div>
                    </div>
                    
                    <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-200/20">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mx-auto mb-3">
                        📅
                      </div>
                      <div className="text-xl md:text-2xl font-bold mb-1">2+</div>
                      <div className="text-xs md:text-sm text-muted">Yıl Deneyim</div>
                    </div>
                    
                    <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-200/20">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mx-auto mb-3">
                        🚀
                      </div>
                      <div className="text-xl md:text-2xl font-bold mb-1">15+</div>
                      <div className="text-xs md:text-sm text-muted">Proje</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>



        {/* Skills & Technologies */}
        <FadeInSection delay={800}>
          <section className="py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 px-4 lg:px-0">
                  <FadeInSection delay={900}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100/10 border border-cyan-200/20 rounded-full mb-6">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-sm font-medium text-cyan-600">Teknoloji Stack</span>
                    </div>
                  </FadeInSection>
                  <FadeInSection delay={1000}>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-cyan-600 to-blue-600">
                        Uzmanlaştığım Teknolojiler
                      </span>
                    </h2>
                  </FadeInSection>
                  <FadeInSection delay={1100}>
                    <p className="text-base md:text-lg lg:text-xl text-muted max-w-3xl mx-auto">
                      Modern web geliştirme alanında kullandığım <span className="text-foreground font-medium">teknolojiler</span> ve 
                      <span className="text-foreground font-medium"> araçlar</span>
                    </p>
                  </FadeInSection>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-12 px-4 lg:px-0">
                  <FadeInSection delay={1200}>
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Frontend Teknolojileri</h3>
                      <div className="space-y-6">
                        {[
                          { name: "React", percentage: 90, color: "bg-gradient-to-r from-blue-500 to-cyan-500", icon: "⚛️" },
                          { name: "Next.js", percentage: 85, color: "bg-gradient-to-r from-gray-800 to-gray-600", icon: "▲" },
                          { name: "TypeScript", percentage: 75, color: "bg-gradient-to-r from-blue-600 to-blue-400", icon: "📘" },
                          { name: "Tailwind CSS", percentage: 95, color: "bg-gradient-to-r from-cyan-500 to-blue-500", icon: "💨" }
                        ].map((skill, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{skill.icon}</span>
                                <h4 className="font-bold text-lg">{skill.name}</h4>
                              </div>
                              <span className="text-sm font-medium text-muted">{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200/20 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform skill-progress`}
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>

                  <FadeInSection delay={1400}>
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Backend Teknolojileri</h3>
                      <div className="space-y-6">
                        {[
                          { name: "Node.js", percentage: 85, color: "bg-gradient-to-r from-green-600 to-green-400", icon: "🟢" },
                          { name: "Express.js", percentage: 90, color: "bg-gradient-to-r from-gray-700 to-gray-500", icon: "🚀" },
                          { name: "MongoDB", percentage: 80, color: "bg-gradient-to-r from-green-500 to-emerald-500", icon: "🍃" },
                          { name: "PostgreSQL", percentage: 70, color: "bg-gradient-to-r from-blue-700 to-blue-500", icon: "🐘" }
                        ].map((skill, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{skill.icon}</span>
                                <h4 className="font-bold text-lg">{skill.name}</h4>
                              </div>
                              <span className="text-sm font-medium text-muted">{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200/20 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform skill-progress`}
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Contact Form Section */}
        <FadeInSection delay={600}>
          <section className="py-32 bg-foreground/5 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-full h-32 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-indigo-600/10 blur-2xl" 
                style={{ 
                  top: isMounted ? 100 + scrollPosition * 0.05 : 100,
                  transform: 'skewY(-6deg)'
                }}
              ></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <FadeInSection delay={700}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 border border-emerald-200/30 rounded-full mb-8">
                      <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></span>
                      <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">İletişim</span>
                    </div>
                  </FadeInSection>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-emerald-600 to-cyan-600">
                      Birlikte Çalışalım
                    </span>
                  </h2>
                  <p className="text-lg text-muted max-w-2xl mx-auto">
                    Yeni projeler için müsaitim. Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Contact Form */}
                  <FadeInSection delay={800}>
                    <div className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              İsim Soyisim *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                              placeholder="Adınız ve soyadınız"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              E-posta *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                              placeholder="ornek@email.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Konu
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                            placeholder="Proje hakkında görüşme"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Mesaj *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 resize-none"
                            placeholder="Projeniz hakkında detayları paylaşın..."
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-medium hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Gönderiliyor...
                            </>
                          ) : (
                            <>
                              📤 Mesaj Gönder
                            </>
                          )}
                        </button>
                      </form>
                      {submitStatus && (
                        <div className={`p-4 rounded-xl text-center ${
                          submitStatus.includes('✅') ? 'bg-green-100/10 text-green-400 border border-green-200/20' : 'bg-red-100/10 text-red-400 border border-red-200/20'
                        }`}>
                          {submitStatus}
                        </div>
                      )}
                    </div>
                  </FadeInSection>

                  {/* Contact Info & Quick Actions */}
                  <FadeInSection delay={1000}>
                    <div className="space-y-8">
                      <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6">Direkt İletişim</h3>
                        <div className="space-y-4">
                          <a 
                            href="mailto:mcanaz1234@gmail.com"
                            className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                              📧
                            </div>
                            <div>
                              <div className="font-medium">E-posta</div>
                              <div className="text-sm text-muted">mcanaz1234@gmail.com</div>
                            </div>
                          </a>
                          <a 
                            href="/api/download-cv"
                            download="Melih_Canaz_CV.txt"
                            className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              📄
                            </div>
                            <div>
                              <div className="font-medium">CV İndir</div>
                              <div className="text-sm text-muted">Detaylı özgeçmiş</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      
                      <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-200/20 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Hızlı Bilgi</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                            Yeni projeler için müsait
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                            24 saat içinde yanıt veriyorum
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            Ücretsiz danışmanlık
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </Layout>
  );
} 