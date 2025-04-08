"use client";

import { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      {children}
    </div>
  );
} 