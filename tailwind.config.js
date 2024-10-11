/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      gray: {
        light: '#f0f0f0',
        default: '#b2b2be',
        dark: '#575760',
      },
      current: 'currentColor',
      slate: '#222222',
      gold: '#B08C38',
      white: '#F3F4F6',
    },
    extend: {},
  },
  plugins: [],
}

