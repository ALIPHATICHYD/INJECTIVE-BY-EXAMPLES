'use client';

import { useEffect, useRef } from 'react';

type CountUpProps = { value: number; decimals?: number; prefix?: string; suffix?: string };

/**
 * Counts a published figure up from zero the first time it scrolls into view, like the
 * counters on injective.com. The server renders the final value, so the figure is correct
 * without JavaScript and under reduced motion.
 */
export default function CountUp({ value, decimals = 0, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
    let frame = 0;
    el.textContent = format(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1400, 1);
          el.textContent = format(value * (1 - Math.pow(1 - p, 4)));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, prefix, suffix]);

  return <span ref={ref}>{`${prefix}${value.toFixed(decimals)}${suffix}`}</span>;
}
