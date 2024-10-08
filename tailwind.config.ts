import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-main': '#8DCEF4',
      white: '#ffffff',
      blue: '#60CDF6',
      yellow: '#F6C31A',
      green: '#48AD43',
      text: '#222222',
      gray: '#858585',
      graybg: '#f6f6f6',
      black: '#000',
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
        blockShadow: '0px 8px 40px 0px rgba(141, 206, 244, 0.1)',
        blockShadowHover: '0px 2px 24px rgba(34, 34, 34, 0.1), 4px 8px 16px rgba(34, 34, 34, 0.1)',
        ash: '0 11px 34px 0 rgba(0,0,0,.2)',
      },
      gridTemplateColumns: {
        hero: '5fr 7fr',
      },
      content: {
        dots: 'url("/Group.svg")',
      },
      clipPath: {
        polygonShape: 'clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%, 0% 50%);',
        initialShape: 'clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0% 50%);',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.polygonShape': {
          'clip-path': 'polygon(50% 0, 100% 0%, 100% 100%, 50% 100%, 0% 50%)',
        },
        '.initialShape': {
          'clip-path': 'polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0% 50%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
