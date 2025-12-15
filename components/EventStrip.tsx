'use client';

import { events } from '@/lib/data';

const typeColors: Record<string, string> = {
  'Beginner Friendly': 'bg-green-500/20 text-green-300 border-green-500/50',
  'Community': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
  'Developer': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
};

export default function EventStrip() {
  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-injective-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Community <span className="text-injective-accent">Events</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Join the Ninja Labs community. Stay updated with upcoming workshops, AMAs, and ecosystem showcases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-injective-blue/30 hover:border-injective-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-injective-accent/20"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                📅 {event.date}
              </p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[event.type] || 'bg-gray-500/20 text-gray-300 border-gray-500/50'}`}>
                  {event.type}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-injective-accent hover:text-injective-light transition-colors"
                >
                  Join →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
