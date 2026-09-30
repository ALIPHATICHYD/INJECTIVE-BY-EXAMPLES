'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Fades content up the first time it scrolls into view. The server HTML is fully visible and
 * only content still below the fold at load is hidden, so nothing flashes and the page reads
 * fine without JavaScript. Static under reduced motion (globals.css).
 */
export default function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('is-hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove('is-hidden');
        io.disconnect();
      },
      // Threshold 0 plus a bottom inset, so even a block taller than the screen reveals.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
