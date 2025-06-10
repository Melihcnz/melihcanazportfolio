"use client";

import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "Modern ve kullanıcı dostu bir e-ticaret platformu. React ve Node.js kullanılarak geliştirildi.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/projects/e-ticaret.jpg",
      github: "https://github.com/Melihcnz/e-ticaret"
    },
    {
      title: "İşletme Yönetim Sistemi API",
      description: "İşletmelerin müşteri, ürün, sipariş ve fatura yönetimini yapabilecekleri çok platformlu bir API.",
      tech: ["Node.js", "Express", "MySQL", "JWT"],
      image: "/projects/isletme-api.jpg",
      github: "https://github.com/Melihcnz/Isletme-Yonetim-Sistemi-API"
    },
    {
      title: "WhatsApp Bot",
      description: "Otomatik mesaj gönderimi ve yönetimi için geliştirilmiş WhatsApp bot uygulaması.",
      tech: ["JavaScript", "Node.js", "WhatsApp API"],
      image: "/projects/whatsapp-bot.jpg",
      github: "https://github.com/Melihcnz/Whatsapp-bot"
    },
    {
      title: "Stok Takip Sistemi",
      description: "İşletmeler için kapsamlı stok takip ve yönetim sistemi.",
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      image: "/projects/stok-takip.jpg",
      github: "https://github.com/Melihcnz/stok-takip"
    },
    {
      title: "React Dashboard",
      description: "Modern ve özelleştirilebilir yönetim paneli arayüzü.",
      tech: ["React", "Material-UI", "Chart.js"],
      image: "/projects/dashboard.jpg",
      github: "https://github.com/Melihcnz/React-Dashboard"
    },
    {
      title: "Social Media App",
      description: "Sosyal medya platformu prototipi.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/projects/social-media.jpg",
      github: "https://github.com/Melihcnz/socialmedia-app"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-3xl -top-48 -left-48 floating-element"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 blur-3xl top-20 -right-32 floating-element" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center md:text-left">
              <FadeInSection delay={200}>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600 animate-gradient">
                      Melih Canaz
                    </h1>
                  </div>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  <div className="px-4 py-2 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 border border-indigo-200/30 rounded-full">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">🚀 Full Stack Developer</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 border border-cyan-200/30 rounded-full">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">🔗 Blockchain Enthusiast</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 border border-emerald-200/30 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-600">Müsait</span>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Hakkımda</h2>
                    <p className="text-lg text-muted leading-relaxed">
                      <span className="text-foreground font-medium">JavaScript ve TypeScript</span> dillerinde uzmanlaşmış, 
                      modern web teknolojileri ve mobil uygulamalar geliştirme konularında deneyimli Full Stack Developer.
                    </p>
                    <p className="text-muted">
                      <span className="text-foreground font-medium">Açık kaynak projelere</span> katkıda bulunmayı ve 
                      <span className="text-foreground font-medium"> yeni teknolojiler</span> öğrenmeyi seven bir yazılım geliştirici.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                        <div className="text-sm text-muted mb-1">Yaş</div>
                        <div className="text-xl font-bold">21</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                        <div className="text-sm text-muted mb-1">Deneyim</div>
                        <div className="text-xl font-bold">2+ Yıl</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 col-span-2">
                        <div className="text-sm text-muted mb-1">E-mail</div>
                        <div className="text-lg font-medium">mcanaz1234@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={800}>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="https://github.com/Melihcnz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/25 hover:-translate-y-1 flex items-center gap-3"
                  >
                    <span>🐙</span>
                    <span>GitHub</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/melih-canaz-ab9513155" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/25 hover:-translate-y-1 flex items-center gap-3"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  <a 
                    href="https://twitter.com/meelihcnz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/25 hover:-translate-y-1 flex items-center gap-3"
                  >
                    <span>🐦</span>
                    <span>Twitter</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <FadeInSection delay={300}>
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/10 blur-3xl" 
                style={{ 
                  top: isMounted ? -150 - scrollPosition * 0.05 : -150, 
                  left: isMounted ? -250 - scrollPosition * 0.02 : -250
                }}
              ></div>
              <div 
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/8 to-blue-600/8 blur-2xl" 
                style={{ 
                  bottom: isMounted ? -100 - scrollPosition * 0.03 : -100, 
                  right: isMounted ? -150 - scrollPosition * 0.04 : -150
                }}
              ></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <FadeInSection delay={400}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/10 border border-indigo-200/20 rounded-full mb-6">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-sm font-medium text-indigo-600">Teknoloji Yığını</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={500}>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-600 to-purple-600">
                      Yetenekler & Teknolojiler
                    </span>
                  </h2>
                </FadeInSection>
                <FadeInSection delay={600}>
                  <p className="text-xl text-muted max-w-3xl mx-auto">
                    Modern web geliştirmede kullandığım <span className="text-foreground font-medium">araçlar ve teknolojiler</span>
                  </p>
                </FadeInSection>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
                  { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
                  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
                  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
                  { name: "React Native", icon: "📱", color: "from-purple-400 to-pink-500" },
                  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
                  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" },
                  { name: "Express.js", icon: "🚀", color: "from-gray-400 to-gray-600" },
                  { name: "Next.js", icon: "▲", color: "from-black to-gray-800" },
                  { name: "Git", icon: "🌲", color: "from-orange-400 to-red-500" },
                  { name: "MySQL", icon: "🐬", color: "from-blue-400 to-blue-600" },
                  { name: "Vite", icon: "⚡", color: "from-purple-400 to-purple-600" },
                ].map((skill, i) => (
                  <FadeInSection delay={700 + (i * 100)} key={skill.name}>
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                      <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center backdrop-blur-sm">
                        <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Enhanced Projects Section */}
        <FadeInSection delay={400}>
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/10 blur-3xl" 
                style={{ 
                  top: isMounted ? 200 - scrollPosition * 0.07 : 200, 
                  right: isMounted ? -150 - scrollPosition * 0.04 : -150
                }}
              ></div>
              <div 
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-600/8 to-cyan-600/8 blur-2xl" 
                style={{ 
                  bottom: isMounted ? 100 - scrollPosition * 0.05 : 100, 
                  left: isMounted ? -100 - scrollPosition * 0.03 : -100
                }}
              ></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <FadeInSection delay={500}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/10 border border-purple-200/20 rounded-full mb-6">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-sm font-medium text-purple-600">Portfolyo</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={600}>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-purple-600 to-pink-600">
                      Projelerim
                    </span>
                  </h2>
                </FadeInSection>
                <FadeInSection delay={700}>
                  <p className="text-xl text-muted max-w-3xl mx-auto">
                    Geliştirdiğim <span className="text-foreground font-medium">açık kaynak projeler</span> ve 
                    <span className="text-foreground font-medium"> ticari uygulamalar</span>
                  </p>
                </FadeInSection>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <FadeInSection delay={800 + (index * 150)} key={project.title}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
                        {/* Project Image/Gradient */}
                        <div className="aspect-video bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                            <span className="text-white text-xs font-medium">2024</span>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <span className="text-white">🚀</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <span className="text-purple-400">→</span>
                            </div>
                          </div>
                          
                          <p className="text-muted leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span key={tech} className="text-xs px-3 py-1 rounded-full bg-purple-100/10 text-purple-400 border border-purple-200/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="pt-4">
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              <span>🐙</span>
                              <span>GitHub'da İncele</span>
                              <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Enhanced Experience Section */}
        <FadeInSection delay={500}>
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-600/10 to-red-600/10 blur-3xl" 
                style={{ 
                  bottom: isMounted ? 50 - scrollPosition * 0.03 : 50, 
                  left: isMounted ? -100 - scrollPosition * 0.01 : -100
                }}
              ></div>
              <div 
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/8 to-indigo-600/8 blur-2xl" 
                style={{ 
                  top: isMounted ? 100 - scrollPosition * 0.05 : 100, 
                  right: isMounted ? -150 - scrollPosition * 0.02 : -150
                }}
              ></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <FadeInSection delay={600}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/10 border border-orange-200/20 rounded-full mb-6">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-sm font-medium text-orange-600">Kariyer Yolculuğum</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={700}>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-orange-600 to-red-600">
                      Profesyonel Deneyim
                    </span>
                  </h2>
                </FadeInSection>
                <FadeInSection delay={800}>
                  <p className="text-xl text-muted max-w-3xl mx-auto">
                    Yazılım geliştirme alanındaki <span className="text-foreground font-medium">profesyonel yolculuğum</span> ve 
                    <span className="text-foreground font-medium"> edindiğim deneyimler</span>
                  </p>
                </FadeInSection>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-400"></div>
                  
                  <div className="space-y-12">
                    <FadeInSection delay={900}>
                      <div className="relative">
                        <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full border-4 border-background"></div>
                        <div className="ml-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm group">
                              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                                <div>
                                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                    Freelance Full Stack Developer
                                  </h3>
                                  <div className="flex items-center gap-3">
                                    <div className="px-3 py-1 bg-emerald-100/10 text-emerald-400 rounded-full text-sm font-medium">
                                      Aktif
                                    </div>
                                    <span className="text-muted text-sm">Freelance</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-muted">
                                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                    📅
                                  </div>
                                  <span className="font-medium">2022 - Günümüz</span>
                                </div>
                              </div>
                              
                              <p className="text-muted mb-6 leading-relaxed">
                                Çeşitli müşteriler için <span className="text-foreground font-medium">web uygulamaları ve API'ler</span> geliştirdim. 
                                E-ticaret platformları, yönetim sistemleri ve sosyal medya uygulamaları üzerinde çalıştım.
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "TypeScript", "MongoDB", "Next.js"].map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-emerald-100/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-200/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                    
                    <FadeInSection delay={1000}>
                      <div className="relative">
                        <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-background"></div>
                        <div className="ml-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm group">
                              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                                <div>
                                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    Stajyer Yazılım Geliştirici
                                  </h3>
                                  <div className="flex items-center gap-3">
                                    <div className="px-3 py-1 bg-blue-100/10 text-blue-400 rounded-full text-sm font-medium">
                                      Tamamlandı
                                    </div>
                                    <span className="text-muted text-sm">Staj Programı</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-muted">
                                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    📅
                                  </div>
                                  <span className="font-medium">2021 - 2022</span>
                                </div>
                              </div>
                              
                              <p className="text-muted mb-6 leading-relaxed">
                                Web uygulamaları geliştirme, <span className="text-foreground font-medium">veritabanı yönetimi</span> ve 
                                <span className="text-foreground font-medium"> API entegrasyonları</span> konularında deneyim kazandım.
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                {["JavaScript", "HTML/CSS", "MySQL", "PHP", "Git"].map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-blue-100/10 text-blue-400 rounded-full text-xs font-medium border border-blue-200/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Enhanced Contact Section */}
        <FadeInSection delay={600}>
          <section className="py-32 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-emerald-600/15 to-cyan-600/15 blur-3xl" 
                style={{ 
                  top: isMounted ? '30%' - scrollPosition * 0.05 : '30%', 
                  left: isMounted ? -150 - scrollPosition * 0.1 : -150
                }}
              ></div>
              <div 
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-2xl" 
                style={{ 
                  bottom: isMounted ? -100 - scrollPosition * 0.03 : -100, 
                  right: isMounted ? -100 - scrollPosition * 0.08 : -100
                }}
              ></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                <FadeInSection delay={700}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/10 border border-emerald-200/20 rounded-full mb-6">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-emerald-600">Birlikte çalışalım</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={800}>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-emerald-600 to-cyan-600">
                      İletişime Geçin
                    </span>
                  </h2>
                </FadeInSection>
                <FadeInSection delay={900}>
                  <p className="text-xl text-muted max-w-3xl mx-auto">
                    <span className="text-foreground font-medium">Yeni projeler</span> ve iş birlikleri için benimle iletişime geçebilirsiniz
                  </p>
                </FadeInSection>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <FadeInSection delay={1000}>
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Bana Ulaşın</h3>
                      <p className="text-muted leading-relaxed">
                        Projeleriniz için <span className="text-foreground font-medium">profesyonel destek</span> almak istiyorsanız, 
                        benimle iletişime geçmekten çekinmeyin.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:mcanaz1234@gmail.com" 
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                          📧
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-emerald-400 transition-colors">E-mail</div>
                          <div className="text-sm text-muted">mcanaz1234@gmail.com</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://twitter.com/meelihcnz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                          🐦
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-emerald-400 transition-colors">Twitter</div>
                          <div className="text-sm text-muted">@meelihcnz</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.instagram.com/meelihcnz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                          📷
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-emerald-400 transition-colors">Instagram</div>
                          <div className="text-sm text-muted">@meelihcnz</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={1100}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-60"></div>
                    <form onSubmit={handleSubmit} className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm space-y-6">
                      <h3 className="text-xl font-bold mb-6">Proje Hakkında</h3>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">İsim *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">E-posta *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Proje Detayları *</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-sm resize-none"
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/25 hover:-translate-y-1 flex items-center justify-center gap-3"
                      >
                        <span>🚀</span>
                        <span>Projeyi Gönder</span>
                      </button>
                    </form>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </Layout>
  );
} 