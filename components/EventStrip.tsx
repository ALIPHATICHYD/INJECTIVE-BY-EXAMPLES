import { FaCalendar } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { card, container, emphasis } from '@/components/styles';
import { events } from '@/lib/data';

export default function EventStrip() {
  return (
    <section id="events" className="scroll-mt-20 border-t border-line bg-page-2 py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeader
            title={<>Community <em className={emphasis}>Events</em></>}
            lede="Join the vibrant Injective community. Attend workshops, AMAs, and ecosystem events."
          />
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {events.map((event) => (
              <li key={event.id}>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className={card}>
                  <span className="self-start rounded-full border border-line-strong px-3 py-1 text-xs font-semibold text-ink-2">{event.type}</span>
                  <h3 className="mt-6 flex-1 font-display text-2xl leading-tight text-ink">{event.title}</h3>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-sm">
                    <span className="inline-flex min-w-0 items-center gap-2 text-ink-2">
                      <FaCalendar aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-ink-3" />
                      {event.date}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-ocean-text">
                      Join
                      <FiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
