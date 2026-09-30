import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import { container } from '@/components/styles';

/** Closing Ocean block, the one place the brand colour fills a whole surface. */
export default function CallToAction() {
  return (
    <section className="py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ocean px-6 py-14 sm:px-10 md:px-14 md:py-20">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-snow/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl font-normal leading-[1.05] tracking-[-0.015em] text-snow md:text-5xl">
                  Ready to build on <em className="italic">Injective</em>?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-snow/85">
                  Pick a tutorial above, or go straight to Injective's developer documentation.
                </p>
              </div>
              <a
                href="https://docs.injective.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-full bg-snow px-6 py-3 text-[15px] font-semibold text-page transition duration-300 ease-out-expo hover:-translate-y-px hover:bg-white active:translate-y-0 active:scale-[0.98] md:self-auto"
              >
                Open the docs
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
