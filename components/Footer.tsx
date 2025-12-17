'use client';

import Image from 'next/image';
import { FaGithub, FaDiscord, FaXTwitter, FaTelegram, FaReddit } from 'react-icons/fa6';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white border-t border-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6 group">
              <Image
                src="/injective-logo.jpeg"
                alt="Injective Logo"
                width={100}
                height={100}
                className="rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-injective-400 to-cyan-400">
              Injective
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The blockchain built for finance. Built by the community, for the community.
            </p>
          </div>

          {/* Developer Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-injective-400 rounded-full"></span>
              Developers
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Documentation', url: 'https://docs.injective.network/' },
                { label: 'GitHub', url: 'https://github.com/InjectiveLabs' },
                { label: 'Explorer', url: 'https://injscan.com/' },
                { label: 'Discord Chat', url: 'https://t.me/+Nsy2KjGWtOE5NTY9' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-injective-400 transition-colors text-sm group flex items-center gap-1"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-injective-400 rounded-full"></span>
              Ecosystem
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Injective Hub', url: 'https://injhub.com/' },
                { label: 'Get INJ', url: 'https://injective.com/getinj' },
                { label: 'Bridge Assets', url: 'https://bridge.injective.network/' },
                { label: 'Stake INJ', url: 'https://injhub.com/stake/' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-injective-400 transition-colors text-sm group flex items-center gap-1"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-injective-400 rounded-full"></span>
              Community
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog', url: 'https://injective.com/blog' },
                { label: 'Press', url: 'https://injective.com/press' },
                { label: 'Careers', url: 'https://injective.com/careers' },
                { label: 'Contact', url: 'https://injective.com/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-injective-400 transition-colors text-sm group flex items-center gap-1"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://github.com/InjectiveLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-injective-400 transition-all duration-300 group transform hover:scale-125"
              title="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://discord.gg/injective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-injective-400 transition-all duration-300 group transform hover:scale-125"
              title="Discord"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/Injective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-injective-400 transition-all duration-300 group transform hover:scale-125"
              title="Twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/joininjective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-injective-400 transition-all duration-300 group transform hover:scale-125"
              title="Telegram"
            >
              <FaTelegram className="w-6 h-6" />
            </a>
            <a
              href="https://reddit.com/r/injective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-injective-400 transition-all duration-300 group transform hover:scale-125"
              title="Reddit"
            >
              <FaReddit className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2025 <span className="text-injective-400">Injective by Examples.</span> <br />Built by the  <span className="text-injective-400">Injective Africa Community.</span>
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Injective is the blockchain built for finance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
