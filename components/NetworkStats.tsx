import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import { container, emphasis } from '@/components/styles';
import { networkStats } from '@/lib/data';

/** Injective's published network figures, counted up once in view, like the counters on injective.com. */
export default function NetworkStats() {
  return (
    <section aria-labelledby="numbers-title" className="border-y border-line bg-surface py-16 md:py-20">
      <div className={container}>
        <Reveal>
          <h2 id="numbers-title" className="font-display text-3xl font-normal leading-tight text-ink md:text-4xl">
            Injective by the <em className={emphasis}>numbers</em>
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {networkStats.map((stat) => (
              <div key={stat.label} className="min-w-0 border-l border-line-strong pl-3 sm:pl-4 md:pl-5">
                <dt className="text-sm text-ink-3">{stat.label}</dt>
                <dd className="mt-2 font-mono text-[1.75rem] leading-none tracking-tight text-ink tabular-nums sm:text-4xl md:text-5xl">
                  {stat.count ? <CountUp {...stat.count} /> : stat.text}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-ink-3">
            Network figures as published on{' '}
            <a href="https://injective.com" target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-4 hover:text-ink">
              injective.com
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
