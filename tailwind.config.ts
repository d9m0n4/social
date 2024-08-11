import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-main': '#229ED9',
      white: '#ffffff',
      blue: '#60CDF6',
      yellow: '#FEC653',
      green: '#2FB967',
      text: '#222222',
      gray: '#787878',
      black: '#222222',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
        xl: '1140px',
        lg: '960px',
        md: '720px',
        sm: '540px',
      },
    },
    extend: {
      boxShadow: {
        blockShadow: '0 -1px 16px rgba(34, 34, 34, 0.1), 0 6px 16px rgba(34, 34, 34, 0.1)',
        blockShadowHover: '0px 2px 24px rgba(34, 34, 34, 0.1), 4px 8px 16px rgba(34, 34, 34, 0.1)',
      },
      gridTemplateColumns: {
        hero: '5fr 7fr',
      },
      content: {
        dots: 'url("/Group.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
