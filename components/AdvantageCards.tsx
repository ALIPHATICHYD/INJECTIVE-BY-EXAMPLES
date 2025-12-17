'use client';

import { FaBolt, FaCoins, FaUsers } from 'react-icons/fa6';
import { advantages } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  '⚡': <FaBolt className="w-8 h-8" />,
  '💰': <FaCoins className="w-8 h-8" />,
//   '🔧': <FaTools className="w-8 h-8" />,
  '🥷': <FaUsers className="w-8 h-8" />,
};

export default function AdvantageCards() {
  return (
    <section
      id="advantages"
      className="py-20 px-4 bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Makes Injective <span className="text-transparent bg-clip-text bg-gradient-to-r from-injective-400 to-cyan-400">Special</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Built for speed, scalability, and the future of decentralized finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className="group relative p-6 rounded-lg border transition-all duration-500 hover:shadow-2xl hover:shadow-injective-600/20 hover:-translate-y-2"
              style={{
                background: index % 2 === 0
                  ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid ' + (index % 2 === 0 ? 'rgba(2, 132, 199, 0.3)' : 'rgba(100, 116, 139, 0.3)'),
              }}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at top left, rgba(2, 132, 199, 0.1), transparent)',
                  pointerEvents: 'none',
                }}></div>

              <div className="relative z-10">
                <div className="text-injective-400 mb-4 group-hover:scale-125 transition-transform duration-300">
                  {iconMap[advantage.icon] || advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-injective-300 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
