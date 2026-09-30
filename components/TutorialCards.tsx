import { FaGear, FaWallet, FaCoins, FaChartLine, FaCube, FaRobot } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { card, container, emphasis, iconChip } from '@/components/styles';
import { tutorials } from '@/lib/data';

// Difficulty reads as state, so it takes the brand's state colours: Lime, Lemon, Coral.
const difficultyColors: Record<string, string> = {
  Easy: 'border-lime/30 bg-lime/10 text-lime',
  Medium: 'border-lemon/30 bg-lemon/10 text-lemon',
  Hard: 'border-coral/30 bg-coral/10 text-coral',
};

const tutorialIcons: Record<string, React.ReactNode> = {
  'Set Up Your Development Environment': <FaGear className="h-5 w-5" />,
  'Create Your First Wallet': <FaWallet className="h-5 w-5" />,
  'Deploy a Token Contract': <FaCoins className="h-5 w-5" />,
  'Build a Trading Bot': <FaRobot className="h-5 w-5" />,
  'Complex DeFi Strategies': <FaChartLine className="h-5 w-5" />,
  'Custom Derivatives Protocol': <FaCube className="h-5 w-5" />,
};

const categoryOrder = ['Beginner', 'Intermediate', 'Advanced'];

export default function TutorialCards() {
  const grouped = tutorials.reduce((acc, tutorial) => {
    (acc[tutorial.category] ??= []).push(tutorial);
    return acc;
  }, {} as Record<string, typeof tutorials>);
  const sortedEntries = Object.entries(grouped).sort(([a], [b]) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  return (
    <section id="tutorials" className="scroll-mt-20 border-t border-line bg-page-2 py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeader
            title={<>Learning <em className={emphasis}>Path</em></>}
            lede="Choose your difficulty level and master Injective development step by step"
          />
        </Reveal>

        <div className="mt-14 space-y-14">
          {sortedEntries.map(([category, categoryTutorials]) => (
            // Each level has two tutorials, so the level sits in a left rail beside a two-card row.
            <Reveal key={category} className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-10 lg:border-t lg:border-line lg:pt-8">
              <div className="flex items-center gap-4 lg:block">
                <h3 className="inline-block rounded-full border border-line-strong px-4 py-1.5 text-sm font-semibold text-ink">{category}</h3>
                <div aria-hidden="true" className="h-px flex-1 bg-line lg:hidden" />
              </div>

              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {categoryTutorials.map((tutorial) => (
                  <li key={tutorial.id}>
                    <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className={card}>
                      <div className="flex items-start justify-between gap-4">
                        <span className={iconChip}>{tutorialIcons[tutorial.title] ?? <FaChartLine className="h-5 w-5" />}</span>
                        <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${difficultyColors[tutorial.difficulty] ?? 'border-line-strong text-ink-2'}`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <h4 className="mt-6 font-display text-2xl leading-tight text-ink">{tutorial.title}</h4>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{tutorial.description}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-ocean-text">
                          View tutorial
                          <FiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                        </span>
                        <span className="font-mono text-ink-3">{tutorial.time}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
