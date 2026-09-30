import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const LINKS = [
  { label: 'Quick start', href: '#quick-links' },
  { label: 'Learning path', href: '#tutorials' },
  { label: 'Why Injective', href: '#advantages' },
  { label: 'Events', href: '#events' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <Image src="/favicon.png" alt="" width={28} height={28} className="rounded-full" />
          <span className="truncate text-[17px] font-bold tracking-tight text-ink">Injective by Examples</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://docs.injective.network/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ocean px-4 py-2.5 text-sm font-semibold text-snow transition duration-300 ease-out-expo hover:-translate-y-px hover:bg-ocean-hover active:translate-y-0 active:scale-[0.98]"
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Read the docs</span>
          <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}
