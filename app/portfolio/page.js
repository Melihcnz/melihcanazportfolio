"use client";

import Layout from "../components/Layout";
import FadeInSection from "../components/FadeInSection";
import { useState } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl space-y-8">
              <FadeInSection delay={200}>
                <h1 className="text-7xl font-bold">Melih Canaz</h1>
              </FadeInSection>
              <FadeInSection delay={400}>
                <p className="text-xl text-muted">
                  Full Stack Developer & Blockchain Enthusiast
                </p>
              </FadeInSection>
              <div className="space-y-4 text-muted">
                <FadeInSection delay={600}>
                  <p>Doğum Tarihi: 30.06.2003</p>
                  <p>E-mail: mcanaz1234@gmail.com</p>
                  <p className="max-w-2xl">
                    JavaScript ve TypeScript dillerinde uzmanlaşmış, modern web teknolojileri ve mobil uygulamalar 
                    geliştirme konularında deneyimli Full Stack Developer. Açık kaynak projelere katkıda bulunmayı 
                    ve yeni teknolojiler öğrenmeyi seven bir yazılım geliştirici.
                  </p>
                </FadeInSection>
              </div>
              <FadeInSection delay={800}>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Melihcnz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <span className="relative z-10">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/melih-canaz-ab9513155" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <span className="relative z-10">LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com/meelihcnz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <span className="relative z-10">Twitter</span>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <FadeInSection delay={300}>
          <section className="py-32">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16">Yetenekler & Teknolojiler</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "React Native",
                  "MongoDB",
                  "PostgreSQL",
                  "Express.js",
                  "Next.js",
                  "Git",
                  "MySQL",
                  "Vite",
                ].map((skill, i) => (
                  <FadeInSection delay={400 + (i * 100)} key={skill}>
                    <div className="group relative p-8 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-1">
                      <p className="font-medium text-center">{skill}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Projects Section */}
        <FadeInSection delay={400}>
          <section className="py-32">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16">Projeler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <FadeInSection delay={500 + (index * 200)} key={project.title}>
                    <div className="group relative rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-transparent"></div>
                      <div className="p-8 space-y-4">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-xs px-3 py-1 rounded-full bg-foreground/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm hover:text-foreground transition-colors"
                        >
                          GitHub'da İncele →
                        </a>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Experience Section */}
        <FadeInSection delay={500}>
          <section className="py-32">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16">Deneyim</h2>
              <div className="space-y-12">
                <FadeInSection delay={600}>
                  <div className="p-8 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Freelance Full Stack Developer</h3>
                      <span className="text-muted">2022 - Günümüz</span>
                    </div>
                    <p className="text-muted">
                      Çeşitli müşteriler için web uygulamaları ve API'ler geliştirdim. E-ticaret platformları,
                      yönetim sistemleri ve sosyal medya uygulamaları üzerinde çalıştım.
                    </p>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={800}>
                  <div className="p-8 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Stajyer Yazılım Geliştirici</h3>
                      <span className="text-muted">2021 - 2022</span>
                    </div>
                    <p className="text-muted">
                      Web uygulamaları geliştirme, veritabanı yönetimi ve API entegrasyonları konularında
                      deneyim kazandım.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Contact Section */}
        <FadeInSection delay={600}>
          <section className="py-32" id="contact">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16">İletişim</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <FadeInSection delay={700}>
                  <div className="space-y-6">
                    <p className="text-muted">
                      Yeni projeler ve iş birlikleri için benimle iletişime geçebilirsiniz.
                    </p>
                    <div className="flex flex-col gap-2">
                      <a href="mailto:mcanaz1234@gmail.com" className="text-sm hover:text-foreground transition-colors">mcanaz1234@gmail.com</a>
                      <a href="https://twitter.com/meelihcnz" className="text-sm hover:text-foreground transition-colors">@meelihcnz</a>
                      <a href="https://www.instagram.com/meelihcnz" className="text-sm hover:text-foreground transition-colors">@meelihcnz</a>
                    </div>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={800}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">İsim</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-foreground/5 rounded-lg focus:outline-none focus:bg-foreground/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">E-posta</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-foreground/5 rounded-lg focus:outline-none focus:bg-foreground/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Mesaj</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-foreground/5 rounded-lg focus:outline-none focus:bg-foreground/10 transition-colors"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="px-8 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                    >
                      Gönder
                    </button>
                  </form>
                </FadeInSection>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </Layout>
  );
} 