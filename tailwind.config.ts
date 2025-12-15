import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        injective: {
          dark: '#0f172a',
          blue: '#1e40af',
          light: '#3b82f6',
          accent: '#06b6d4',
        },
        ninja: {
          black: '#1a1a1a',
          gold: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
