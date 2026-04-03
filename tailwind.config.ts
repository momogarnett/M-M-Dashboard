import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mm: {
          orange: '#FF6600',
          blue: '#0052CC',
          cyan: '#00CCFF',
          light: '#F5F5F5',
          dark: '#1A1A1A',
        },
        primary: '#FF6600',
        secondary: '#0052CC',
        accent: '#00CCFF',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
