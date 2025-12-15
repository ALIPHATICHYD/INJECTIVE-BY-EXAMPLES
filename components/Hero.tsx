'use client';

import { heroData } from '@/lib/data';

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById('advantages');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Background gradient blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-injective-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-injective-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-injective-accent via-blue-400 to-injective-light bg-clip-text text-transparent">
          {heroData.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {heroData.subtitle}
        </p>

        <button
          onClick={handleScroll}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-injective-blue to-injective-light text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-injective-blue/50 transition-all duration-300 transform hover:scale-105"
        >
          {heroData.cta}
          <span>→</span>
        </button>

        {/* Ninja Labs mention */}
        <div className="mt-16 text-sm text-gray-400">
          <p>Brought to you by the <span className="text-ninja-gold font-semibold">Ninja Labs</span> community</p>
        </div>
      </div>
    </section>
  );
}
