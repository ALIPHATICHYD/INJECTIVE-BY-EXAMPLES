'use client';

import { FaRocket, FaLightbulb, FaCode, FaLink } from 'react-icons/fa6';
import { quickLinks } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  '🚀': <FaRocket className="w-8 h-8" />,
  '⚡': <FaLightbulb className="w-8 h-8" />,
  '💻': <FaCode className="w-8 h-8" />,
  '🔗': <FaLink className="w-8 h-8" />,
};

export default function QuickLinks() {
  return (
    <section id="quick-links" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-injective-400 to-cyan-400">Start</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Get started with Injective in minutes with our quick-start guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.link}
              className="group relative p-6 rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-injective-600/30 hover:-translate-y-2"
              style={{
                background: index % 2 === 0 
                  ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid ' + (index % 2 === 0 ? 'rgba(2, 132, 199, 0.3)' : 'rgba(100, 116, 139, 0.3)'),
              }}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{
                  background: 'radial-gradient(circle at top right, rgba(2, 132, 199, 0.1), transparent)',
                }}></div>
              
              <div className="relative z-10">
                <div className="text-injective-400 mb-4 group-hover:scale-125 transition-transform duration-300">
                  {iconMap[link.icon] || link.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-injective-300 transition-colors">
                  {link.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {link.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-600/50">
                  <span className="text-xs text-injective-400 font-semibold">
                    {link.duration}
                  </span>
                  <span className="text-injective-400 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

