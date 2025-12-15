'use client';

import { steps } from '@/lib/data';

export default function GettingStarted() {
  return (
    <section id="getting-started" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Your <span className="text-injective-accent">3-Step</span> Journey Starts Here
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Getting started with Injective is simple. Follow these three easy steps and you'll be exploring the future of DeFi in minutes.
        </p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6 items-start">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-injective-accent to-injective-blue text-white font-bold text-2xl shadow-lg shadow-injective-accent/30">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-injective-blue/20 text-injective-accent border border-injective-accent/50 rounded-md hover:bg-injective-blue/40 transition-all duration-300"
                >
                  {step.linkText}
                  <span>↗</span>
                </a>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full w-1 h-20 bg-gradient-to-b from-injective-accent to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
