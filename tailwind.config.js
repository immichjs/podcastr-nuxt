const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'none': '0',
      },
      maxWidth: {
        '7/10': '70%'
      },
      width: {
        '104': '26rem',
        '192px': '192px',
      },
      height: {
        '26': '6.5rem',
        '100vh-6.6rem': 'calc(100vh - 6.6rem)',
        '192px': '192px',
      },
      colors: {
        amber: colors.amber,
        black: colors.black,
        blue: colors.blue,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.gray,
        green: colors.green,
        indigo: colors.indigo,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        sky: colors.sky,
        teal: colors.teal,
        trueGray: colors.trueGray,
        violet: colors.violet,
        warmGray: colors.warmGray,
        white: colors.white,
        yellow: colors.yellow,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
