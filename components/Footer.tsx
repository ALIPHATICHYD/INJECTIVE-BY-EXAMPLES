import Image from 'next/image';
import { FaGithub, FaDiscord, FaXTwitter, FaTelegram, FaReddit } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { container } from '@/components/styles';

const COLUMNS = [
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', url: 'https://docs.injective.network/' },
      { label: 'GitHub', url: 'https://github.com/InjectiveLabs' },
      { label: 'Explorer', url: 'https://injscan.com/' },
      { label: 'Builders Chat', url: 'https://t.me/+Nsy2KjGWtOE5NTY9' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Injective Hub', url: 'https://injhub.com/' },
      { label: 'Get INJ', url: 'https://injective.com/getinj' },
      { label: 'Bridge Assets', url: 'https://bridge.injective.network/' },
      { label: 'Stake INJ', url: 'https://injhub.com/stake/' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Blog', url: 'https://injective.com/blog' },
      { label: 'Press', url: 'https://injective.com/press' },
    ],
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/InjectiveLabs', Icon: FaGithub },
  { label: 'Discord', href: 'https://discord.gg/injective', Icon: FaDiscord },
  { label: 'X', href: 'https://twitter.com/Injective', Icon: FaXTwitter },
  { label: 'Telegram', href: 'https://t.me/joininjective', Icon: FaTelegram },
  { label: 'Reddit', href: 'https://reddit.com/r/injective', Icon: FaReddit },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page pb-10 pt-16">
      <div className={container}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-sm md:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5">
              <Image src="/favicon.png" alt="" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-bold tracking-tight text-ink">Injective by Examples</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-3">
              Learn Injective through practical examples. Built by the community, for the community.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-3">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                      <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-ink-3">
            <p>© 2025 Injective by Examples. Built by the Injective Africa Community.</p>
            <p className="mt-1 text-xs">Injective is the blockchain built for finance.</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-line-strong hover:text-ink"
                >
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
