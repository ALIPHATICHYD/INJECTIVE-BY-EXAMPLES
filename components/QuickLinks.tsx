import { FaRocket, FaLightbulb, FaCode, FaLink } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { card, container, emphasis, iconChip } from '@/components/styles';
import { quickLinks } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  '🚀': <FaRocket className="h-5 w-5" />,
  '⚡': <FaLightbulb className="h-5 w-5" />,
  '💻': <FaCode className="h-5 w-5" />,
  '🔗': <FaLink className="h-5 w-5" />,
};

export default function QuickLinks() {
  return (
    <section id="quick-links" className="scroll-mt-20 py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeader
            title={<>Quick <em className={emphasis}>Start</em></>}
            lede="Get started with Injective in minutes with our quick-start guides"
          />
        </Reveal>
      </div>

      {/* Phones swipe the cards sideways; wider screens get a grid. */}
      <Reveal className="mt-12">
        <ul className={`${container} no-scrollbar flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-4`}>
          {quickLinks.map((link) => (
            <li key={link.id} className="w-[78%] max-w-[300px] shrink-0 snap-start md:w-auto md:max-w-none">
              <a href={link.link} className={card}>
                <span className={iconChip}>{iconMap[link.icon] ?? link.icon}</span>
                <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{link.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{link.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <span className="font-mono text-ink-3">{link.duration}</span>
                  <FiArrowUpRight aria-hidden="true" className="h-4 w-4 text-ocean-text transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
