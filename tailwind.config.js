const { colors, opacity } = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      opacity,
      fontSize: {
        // Fixed scale (in rem to respect browser settings)
        'text-100': '0.75rem', // 12px
        'text-200': '0.8125rem', // 13px
        'text-300': '0.875rem', // 14px
        'text-400': '1rem', // 16px
        'text-500': '1.125rem', // 18px
        'text-600': '1.3125rem', // 21px
        'text-700': '1.5rem', // 24px
        'text-800': '1.75rem', // 28px
      },
      // Dynamic scale with viewport width
      screens: {
        sm: '500px',
        md: '600px',
        lg: '700px',
        xl: '800px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
