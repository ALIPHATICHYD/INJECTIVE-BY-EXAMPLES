'use client';

import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-injective-dark via-slate-900 to-transparent border-t border-injective-blue/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Injective <span className="text-injective-accent">Beginner Hub</span>
            </h3>
            <p className="text-gray-400 max-w-sm">
              Your starting point to explore Injective, the fastest DeFi blockchain.
              Built with ❤️ by the Ninja Labs community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-injective-accent transition-colors text-sm"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-injective-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Injective Beginner Hub. Built during Ninja Break.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/NinjaLabsCN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ninja-gold transition-colors">
                🐦 Twitter
              </a>
              <a href="https://discord.gg/injective" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ninja-gold transition-colors">
                💬 Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
