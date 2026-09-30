import { FaGithub, FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import HeroArt from '@/components/HeroArt';
import { btnPrimary, btnSecondary, container, emphasis } from '@/components/styles';
import { heroData } from '@/lib/data';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/InjectiveLabs', Icon: FaGithub },
  { label: 'Discord', href: 'https://discord.gg/injective', Icon: FaDiscord },
  { label: 'X', href: 'https://x.com/Injective', Icon: FaXTwitter },
];

export default function Hero() {
  // "Injective by Examples" sets as "Injective" / "by Examples", with the last word in italic Ocean.
  const [first, ...rest] = heroData.title.split(' ');
  const last = rest.pop();

  return (
    <section className="relative">
      <div className={`${container} grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-24`}>
        <div className="min-w-0">
          <p className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] font-medium text-ink-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
            Built by the Injective Africa Community
          </p>

          <h1 className="font-display text-[3.5rem] font-normal leading-[0.98] tracking-[-0.025em] text-ink sm:text-7xl lg:text-8xl">
            <span className="rise-line"><span>{first}</span></span>
            <span className="rise-line">
              <span style={{ animationDelay: '0.12s' }}>
                {rest.join(' ')} <em className={emphasis}>{last}</em>
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl" style={{ animationDelay: '0.3s' }}>
            {heroData.subtitle}
          </p>

          <div className="hero-fade mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.42s' }}>
            <a href="#quick-links" className={btnPrimary}>
              {heroData.cta}
              <FiArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#tutorials" className={btnSecondary}>
              Learning path
            </a>
          </div>

          <ul className="hero-fade mt-10 flex flex-wrap gap-x-6 gap-y-3" style={{ animationDelay: '0.54s' }}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-3 transition-colors hover:text-ink"
                >
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
