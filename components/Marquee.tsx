/**
 * Slow text marquee under the hero, as on NinjaPay. injective.com scrolls partner logos here;
 * this site scrolls the topics it teaches. Pauses on hover and stops under reduced motion.
 */
export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee overflow-hidden border-y border-line">
      <p className="sr-only">Topics covered: {items.join(', ')}</p>
      <div className="marquee-track flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-6 whitespace-nowrap py-5 pl-6 font-display text-2xl text-ink-2 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-ocean after:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
