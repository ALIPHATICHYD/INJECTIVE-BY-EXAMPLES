'use client';

import { advantages } from '@/lib/data';

export default function AdvantageCards() {
  return (
    <section
      id="advantages"
      className="py-20 px-4 bg-gradient-to-b from-transparent to-injective-dark/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What Makes Injective <span className="text-injective-accent">Special</span>?
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Injective redefines web3 with speed, affordability, and community-driven innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-injective-blue/30 hover:border-injective-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-injective-accent/20 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {advantage.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
