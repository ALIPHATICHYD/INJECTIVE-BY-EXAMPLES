import { FaBolt, FaCoins, FaUsers, FaWrench } from 'react-icons/fa6';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { container, emphasis, iconChip } from '@/components/styles';
import { advantages } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  '⚡': <FaBolt className="h-5 w-5" />,
  '💰': <FaCoins className="h-5 w-5" />,
  '🔧': <FaWrench className="h-5 w-5" />,
  '🥷': <FaUsers className="h-5 w-5" />,
};

export default function AdvantageCards() {
  return (
    <section id="advantages" className="scroll-mt-20 py-20 md:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              title={<>What Makes Injective <em className={emphasis}>Special</em></>}
              lede="Built for speed, scalability, and the future of decentralized finance"
            />
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {advantages.map((advantage) => (
              <li key={advantage.id} className="bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover md:p-8">
                <span className={iconChip}>{iconMap[advantage.icon] ?? advantage.icon}</span>
                <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{advantage.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{advantage.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
