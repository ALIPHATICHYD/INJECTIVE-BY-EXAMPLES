import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Injective Beginner Hub | Ninja Labs',
  description: 'Your gateway to Injective: fast DeFi, low fees, and community-driven innovation. Get started in 3 simple steps.',
  keywords: ['Injective', 'Web3', 'DeFi', 'Ninja Labs', 'Blockchain'],
  authors: [{ name: 'Adegoke Fuad' }],
  creator: 'Adegoke Fuad',
  openGraph: {
    title: 'Injective Beginner Hub',
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
