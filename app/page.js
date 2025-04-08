import Link from "next/link";
import Layout from "./components/Layout";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <Layout>
      <main className="page-transition">
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="container mx-auto px-6 py-32">
            <div className="max-w-5xl mx-auto">
              <FadeInSection delay={200}>
                <p className="text-xl text-muted mb-8 fade-in">Merhaba, Ben Melih 👋</p>
              </FadeInSection>
              <FadeInSection delay={400}>
                <h1 className="text-7xl md:text-[120px] font-bold leading-tight mb-12 fade-in">
                  Full Stack <br/> Developer
                </h1>
              </FadeInSection>
              <FadeInSection delay={600}>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center fade-in">
                  <Link href="/portfolio" className="px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
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
          <section className="py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16">Öne Çıkan Projeler</h2>
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
                      <div className="group cursor-pointer">
                        <div className={`h-[400px] ${project.image} bg-cover bg-center rounded-2xl mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white text-lg">Projeyi İncele →</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-sm text-muted">{project.number}</span>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
          <section className="py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Full Stack Geliştirici & Yazılım Uzmanı</h2>
                    <p className="text-lg text-muted">
                      Modern web teknolojileri ve yazılım geliştirme konusunda 2+ yıllık deneyim. 
                      JavaScript ekosistemi ve veritabanı yönetimi konularında uzmanlık.
                    </p>
                    <Link href="/portfolio" className="inline-flex items-center text-lg mt-8 hover-underline">
                      Daha Fazla Bilgi →
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
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-lg">{service}</span>
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
                      <div className="text-center">
                        <p className="text-6xl font-bold mb-4">{stat.number}</p>
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
          <section className="py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Projeniz için İletişime Geçin</h2>
                <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
                  Yeni projeler ve iş birlikleri için her zaman açığım. Modern ve etkili çözümler 
                  geliştirmek için birlikte çalışalım.
                </p>
                <Link href="/portfolio#contact" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
                  İletişime Geç →
                </Link>
              </div>
        </div>
          </section>
        </FadeInSection>
      </main>
    </Layout>
  );
}
