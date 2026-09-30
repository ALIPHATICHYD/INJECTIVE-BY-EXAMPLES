import type { Config } from 'tailwindcss'

// Colours follow Injective's brand (injective.com/brand), matching NinjaPay: black page,
// Space Gray cards, Ocean for actions only, Snow text. Lime, Lemon and Coral carry state only.
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#000000',
        'page-2': '#0a0a0c',
        surface: '#121212', // Space Gray
        'surface-hover': '#1b1b22',
        line: '#26262e',
        'line-strong': '#3d3d4a',
        ink: '#eeefff', // Snow, 16.4:1 on Space Gray
        'ink-2': '#b3b4c8', // 9.2:1 on Space Gray
        'ink-3': '#8b8ca3', // 5.7:1 on Space Gray
        snow: '#eeefff',
        ocean: {
          DEFAULT: '#4d3dff',
          hover: '#3a2be0', // darker, so Snow labels stay above AA
          text: '#a59cff', // Ocean lifted for text: Ocean itself is 3.1:1 on Space Gray
        },
        lime: '#ceffc8',
        lemon: '#e8ff5f',
        coral: '#ffa36e',
      },
      fontFamily: {
        sans: ['var(--font-ui-face)', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        display: ['var(--font-display-face)', '"Iowan Old Style"', '"Palatino Linotype"', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
