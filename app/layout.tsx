import type { Metadata, Viewport } from 'next';
import { Figtree, Newsreader } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

// Injective's brand pairs ABC Marist (old-style serif) with TT Commons (geometric sans).
// Both are commercial, so Newsreader and Figtree stand in, as on NinjaPay. To use licensed
// files, swap these two for next/font/local and keep the same `variable` names.
const display = Newsreader({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  // Next 14 has no fallback metrics for Newsreader; without this it logs an error on every build.
  adjustFontFallback: false,
});
const ui = Figtree({ subsets: ['latin'], variable: '--font-ui-face', display: 'swap' });

export const metadata: Metadata = {
  title: 'Injective By Examples | Ninja Labs',
  description: 'Your gateway to Injective: fast DeFi, low fees, and community-driven innovation. Get started in 3 simple steps.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: ['Injective', 'Web3', 'DeFi', 'Ninja Labs', 'Blockchain', 'Tutorials', 'Guides', 'Smart Contracts', 'dApps', 'Beginner Hub', 'Getting Started', 'Injective By Examples', 'Injective Tutorials', 'Injective Development'],
  authors: [{ name: 'ALIPHATIC' }],
  creator: 'ALIPHATIC',
  openGraph: {
    title: 'Injective By Examples',
    description: 'Your gateway to Injective',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${ui.variable} ${GeistMono.variable}`}>
      <body className="bg-page font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
