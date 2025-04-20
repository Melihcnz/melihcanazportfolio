"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PromotionBanner({ endDate = "2024-08-15" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = new Date(endDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const closeBanner = () => {
    setIsVisible(false);
    // İsteğe bağlı olarak localStorage'a kapanma durumunu kaydedebilirsiniz
    localStorage.setItem('promotionBannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between">
          <h3 className="text-white font-bold text-lg mb-1">Yaz Kampanyası! 🔥</h3>
          <button 
            onClick={closeBanner} 
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Kampanya bandını kapat"
          >
            ✕
          </button>
        </div>
        <p className="text-white/90 text-sm mb-3">
          Tüm paketlerde %25 indirim. Sınırlı süreli teklif, kaçırmayın!
        </p>
        
        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <span className="block text-white font-bold">{timeLeft.days}</span>
            <span className="text-white/80 text-xs">Gün</span>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <span className="block text-white font-bold">{timeLeft.hours}</span>
            <span className="text-white/80 text-xs">Saat</span>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <span className="block text-white font-bold">{timeLeft.minutes}</span>
            <span className="text-white/80 text-xs">Dakika</span>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <span className="block text-white font-bold">{timeLeft.seconds}</span>
            <span className="text-white/80 text-xs">Saniye</span>
          </div>
        </div>
        
        <Link 
          href="/pricing" 
          className="block w-full bg-white text-indigo-700 font-medium py-2 rounded-lg text-center hover:bg-white/90 transition-colors"
        >
          İndirimi Kullan →
        </Link>
      </div>
    </div>
  );
} 