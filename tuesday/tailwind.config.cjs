/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'skyblues': {
          '50': '#f2f6fc',
          '100': '#e1ecf8',
          '200': '#cadef3',
          '300': '#9fc6ea',
          '400': '#7aade0',
          '500': '#5a90d7',
          '600': '#4675ca',
          '700': '#3c63b9',
          '800': '#365297',
          '900': '#304678',
          '950': '#212d4a',
        },
    }
  },
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}