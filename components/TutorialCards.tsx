'use client';

import { FaGear, FaWallet, FaCoins, FaChartLine, FaCube, FaRobot } from 'react-icons/fa6';
import { tutorials } from '@/lib/data';

const difficultyColors: Record<string, string> = {
  'Easy': 'bg-green-900/30 text-green-300 border-green-700/50',
  'Medium': 'bg-yellow-900/30 text-yellow-300 border-yellow-700/50',
  'Hard': 'bg-red-900/30 text-red-300 border-red-700/50',
};

const categoryColors: Record<string, string> = {
  'Beginner': 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  'Intermediate': 'bg-purple-900/40 text-purple-300 border-purple-700/50',
  'Advanced': 'bg-orange-900/40 text-orange-300 border-orange-700/50',
};

const tutorialIcons: Record<string, React.ReactNode> = {
  'Set Up Your Development Environment': <FaGear className="w-6 h-6" />,
  'Create Your First Wallet': <FaWallet className="w-6 h-6" />,
  'Deploy a Token Contract': <FaCoins className="w-6 h-6" />,
  'Build a Trading Bot': <FaRobot className="w-6 h-6" />,
  'Complex DeFi Strategies': <FaChartLine className="w-6 h-6" />,
  'Custom Derivatives Protocol': <FaCube className="w-6 h-6" />,
};

export default function TutorialCards() {
  const groupedTutorials = tutorials.reduce((acc, tutorial) => {
    if (!acc[tutorial.category]) {
      acc[tutorial.category] = [];
    }
    acc[tutorial.category].push(tutorial);
    return acc;
  }, {} as Record<string, typeof tutorials>);

  const categoryOrder = ['Beginner', 'Intermediate', 'Advanced'];
  const sortedEntries = Object.entries(groupedTutorials).sort(([catA], [catB]) => {
    return categoryOrder.indexOf(catA) - categoryOrder.indexOf(catB);
  });

  return (
    <section id="tutorials" className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-injective-400 to-cyan-400">Path</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Choose your difficulty level and master Injective development step by step
          </p>
        </div>

        {sortedEntries.map(([category, categoryTutorials], categoryIndex) => (
          <div key={category} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className={`px-4 py-2 rounded-full text-sm border font-bold ${categoryColors[category] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                {category}
              </span>
              <div className="h-px flex-1" style={{background: 'linear-gradient(90deg, rgba(2, 132, 199, 0.5) 0%, transparent 100%)'}}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTutorials.map((tutorial, index) => (
                <a
                  key={tutorial.id}
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-lg border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    background: (categoryIndex + index) % 2 === 0
                      ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: (categoryIndex + index) % 2 === 0
                      ? '1px solid rgba(2, 132, 199, 0.4)'
                      : '1px solid rgba(100, 116, 139, 0.3)',
                  }}
                >
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at bottom right, rgba(2, 132, 199, 0.15), transparent)',
                    }}></div>

                  <div className="relative z-10">
                    <div className="text-injective-400 mb-4 group-hover:scale-130 transition-transform duration-300">
                      {tutorialIcons[tutorial.title] || <FaChartLine className="w-6 h-6" />}
                    </div>

                    <h4 className="text-lg font-semibold text-white group-hover:text-injective-300 transition-colors mb-2">
                      {tutorial.title}
                    </h4>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-600/50">
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold border ${difficultyColors[tutorial.difficulty] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <span className="text-injective-400 text-xs font-semibold">
                        {tutorial.time}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center text-injective-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      View Tutorial →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
