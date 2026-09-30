import type { ReactNode } from 'react';

/** Left-aligned serif section heading with an optional lede, as on NinjaPay. */
export default function SectionHeader({ title, lede }: { title: ReactNode; lede?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-4xl font-normal leading-[1.05] tracking-[-0.015em] text-ink md:text-5xl">{title}</h2>
      {lede && <p className="mt-4 text-lg leading-relaxed text-ink-2">{lede}</p>}
    </div>
  );
}
