import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { emerald: { '600': '#16A34A' }, blue: { '600': '#2563EB' } } } },
  plugins: [],
  darkMode: 'class'
};
export default config;
