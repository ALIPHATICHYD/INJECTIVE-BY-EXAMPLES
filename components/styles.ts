// Shared class strings, kept in components/ so Tailwind's content scan sees them.
export const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6';

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ocean px-6 py-3 text-[15px] font-semibold text-snow transition duration-300 ease-out-expo hover:-translate-y-px hover:bg-ocean-hover active:translate-y-0 active:scale-[0.98]';

export const btnSecondary =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-6 py-3 text-[15px] font-semibold text-ink transition duration-300 ease-out-expo hover:-translate-y-px hover:border-ocean-text hover:bg-surface active:translate-y-0 active:scale-[0.98]';

export const card =
  'group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-ocean-text/50 md:p-7';

export const iconChip = 'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean/15 text-ocean-text';

// Italic Ocean emphasis for the one word in a heading that used to carry the gradient.
export const emphasis = 'italic text-ocean-text';
