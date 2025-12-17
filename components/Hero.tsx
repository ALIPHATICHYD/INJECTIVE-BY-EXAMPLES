'use client';

import Image from 'next/image';
import { FaGithub, FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { heroData } from '@/lib/data';

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById('quick-links');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-injective-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-injective-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Injective Logo */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDuration: '0.8s' }}>
          <Image
            src="/injective-logo.jpeg"
            alt="Injective Logo"
            width={120}
            height={120}
            priority
            className="mx-auto rounded-lg shadow-lg shadow-injective-600/20 hover:shadow-injective-600/40 transition-all duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-injective-400 to-cyan-400" style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}>
          {heroData.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}>
          {heroData.subtitle}
        </p>

        <button
          onClick={handleScroll}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-injective-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-injective-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-injective-600/30 hover:shadow-injective-600/50"
        >
          {heroData.cta}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-8" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
          <a 
            href="https://github.com/InjectiveLabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-injective-400 transition-all flex items-center gap-2 group hover:scale-110"
            title="GitHub"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform" /> 
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="https://discord.gg/injective" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-injective-400 transition-all flex items-center gap-2 group hover:scale-110"
            title="Discord"
          >
            <FaDiscord className="text-xl group-hover:scale-110 transition-transform" /> 
            <span className="hidden sm:inline">Discord</span>
          </a>
          <a 
            href="https://x.com/Injective" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-injective-400 transition-all flex items-center gap-2 group hover:scale-110"
            title="Twitter"
          >
            <FaXTwitter className="text-xl group-hover:scale-110 transition-transform" /> 
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
