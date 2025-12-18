import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head />
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
