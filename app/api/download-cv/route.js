import { NextResponse } from 'next/server';

// CV verisini PDF olarak serve etmek için
export async function GET() {
  try {
    // Burada gerçek bir PDF dosyası yerine basit bir metin döndürüyoruz
    // İleride gerçek PDF dosyası eklenebilir
    const cvContent = `
MELIH CANAZ
Full Stack Developer

İLETİŞİM:
📧 Email: mcanaz1234@gmail.com
🌐 Website: melihcanaz.com

HAKKIMDA:
JavaScript ve TypeScript dillerinde uzmanlaşmış, modern web teknolojileri ile yenilikçi çözümler üreten Full Stack geliştirici. 2+ yıllık deneyim ile kullanıcı odaklı, ölçeklenebilir ve performanslı web uygulamaları geliştiriyorum.

TEKNİK YETKİNLİKLER:
Frontend: React, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, MongoDB, PostgreSQL
Araçlar: Git, VS Code, Postman

PROJELER:
• E-Ticaret Platformu - Modern ve kullanıcı dostu platform
• İşletme Yönetim API - Kapsamlı yönetim sistemi API'si
• WhatsApp Bot - Otomatik mesaj yönetimi
• Stok Takip Sistemi - Envanter yönetim sistemi

DENEYİM:
2022 - Günümüz: Freelance Full Stack Developer
- Modern web uygulamaları geliştirme
- API tasarımı ve entegrasyonu
- Veritabanı optimizasyonu
- Kullanıcı deneyimi iyileştirme

EĞİTİM:
Yazılım Geliştirme - Otodidakt
    `;

    // PDF header'ları ile response döndür
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="Melih_Canaz_CV.pdf"');
    
    // Basit text döndürüyoruz - gerçek projede PDF oluşturabiliriz
    return new NextResponse(cvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="Melih_Canaz_CV.txt"',
      },
    });
    
  } catch (error) {
    console.error('CV download error:', error);
    return NextResponse.json(
      { error: 'CV indirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 