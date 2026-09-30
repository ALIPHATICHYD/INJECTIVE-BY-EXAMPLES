'use client';

import Image from 'next/image';
import { useEffect, useId, useState } from 'react';

// A tilted orbit drawn in a 100×100 box. The ring and its Lime dot pass behind the logo tile on
// the far side and in front of it on the near side, so the tile sits inside the orbit.
const ORBIT = 'M 3 58 a 47 15 0 1 0 94 0 a 47 15 0 1 0 -94 0';
const TILT = 'rotate(-12 50 58)';

function OrbitDot({ moving }: { moving: boolean }) {
  return (
    <g transform={moving ? undefined : 'translate(50 73)'}>
      <circle r={3.4} className="fill-lime opacity-20" />
      <circle r={1.5} className="fill-lime" />
      {moving && <animateMotion dur="16s" repeatCount="indefinite" path={ORBIT} />}
    </g>
  );
}

/**
 * Hero art, matching NinjaPay's: the Injective logo tile floats on the black stage inside an
 * Ocean bloom and a slow orbit, standing in for the 3D hero video on injective.com.
 * Everything rests in its final frame under reduced motion.
 */
export default function HeroArt() {
  const clipId = `orbit-front-${useId().replace(/[^\w-]/g, '')}`;
  // The dot waits at the front of the orbit until we know motion is welcome.
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    setMoving(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div aria-hidden="true" className="hero-bloom absolute inset-[8%] rounded-full" />

      <svg viewBox="0 0 100 100" aria-hidden="true" className="hero-orbit absolute inset-0 h-full w-full overflow-visible">
        <g transform={TILT}>
          <path d={ORBIT} vectorEffect="non-scaling-stroke" strokeWidth={1} className="fill-none stroke-ocean-text/30" />
          <OrbitDot moving={moving} />
        </g>
      </svg>

      <div className="hero-tile absolute left-[27%] top-[22%] w-[46%]">
        <div>
          <Image
            src="/injective-logo.jpeg"
            alt="Injective logo"
            width={400}
            height={400}
            priority
            sizes="(min-width: 1024px) 212px, 46vw"
            className="h-auto w-full rounded-[26%] shadow-[0_30px_60px_-18px_rgba(77,61,255,0.6)] ring-1 ring-white/10"
          />
        </div>
      </div>

      <svg viewBox="0 0 100 100" aria-hidden="true" className="hero-orbit absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <rect x={-5} y={58} width={110} height={30} />
          </clipPath>
        </defs>
        <g transform={TILT}>
          <g clipPath={`url(#${clipId})`}>
            <path d={ORBIT} vectorEffect="non-scaling-stroke" strokeWidth={1} className="fill-none stroke-ocean-text/30" />
            <OrbitDot moving={moving} />
          </g>
        </g>
      </svg>
    </div>
  );
}
