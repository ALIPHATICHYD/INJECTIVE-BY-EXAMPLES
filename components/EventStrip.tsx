'use client';

import { FaCalendar } from 'react-icons/fa6';
import { events } from '@/lib/data';

const typeColors: Record<string, string> = {
  'Beginner Friendly': 'bg-green-900/30 text-green-300 border-green-700/50',
  'Community': 'bg-purple-900/30 text-purple-300 border-purple-700/50',
  'Developer': 'bg-blue-900/30 text-blue-300 border-blue-700/50',
};

export default function EventStrip() {
  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-injective-400 to-cyan-400">Events</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Join the vibrant Injective community. Attend workshops, AMAs, and ecosystem events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative p-6 rounded-lg border transition-all duration-500 hover:shadow-2xl hover:shadow-injective-600/20 hover:-translate-y-2"
              style={{
                background: index % 2 === 0
                  ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: index % 2 === 0
                  ? '1px solid rgba(2, 132, 199, 0.4)'
                  : '1px solid rgba(100, 116, 139, 0.3)',
              }}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at bottom left, rgba(2, 132, 199, 0.15), transparent)',
                  pointerEvents: 'none',
                }}></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-injective-300 transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 flex items-center gap-2">
                  <FaCalendar className="text-injective-400" /> {event.date}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${typeColors[event.type] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                    {event.type}
                  </span>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-injective-400 hover:text-injective-300 transition-colors font-semibold text-sm group-hover:translate-x-1 duration-300"
                  >
                    Join →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
