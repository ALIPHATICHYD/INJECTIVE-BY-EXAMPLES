import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeader from '@/components/SectionHeader';
import { btnSecondary, container, emphasis } from '@/components/styles';
import { steps } from '@/lib/data';

// Not on the page right now; restyled with the rest so it matches if it comes back.
export default function GettingStarted() {
  return (
    <section id="getting-started" className="scroll-mt-20 py-20 md:py-28">
      <div className={container}>
        <SectionHeader
          title={<>Your <em className={emphasis}>3-Step</em> Journey Starts Here</>}
          lede="Getting started with Injective is simple. Follow these three easy steps and you'll be exploring the future of DeFi in minutes."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col rounded-2xl border border-line bg-surface p-6 md:p-7">
              <span className="font-mono text-sm text-ocean-text">0{step.number}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{step.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{step.description}</p>
              <a href={step.link} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} mt-6 self-start px-4 py-2 text-sm`}>
                {step.linkText}
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
