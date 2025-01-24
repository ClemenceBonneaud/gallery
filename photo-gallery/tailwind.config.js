module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#C2B3E3',
        base: '#383343',
        dark: '#212027',
        gradient: 'linear-gradient(325deg, #0A0C08, #111312, #19191C, #212027, #28262F, #2F2D39, #383343, #474056)',
        g1: '#0A0C08',
        g2: '#111312',
        g3: '#19191C',
        g4: '#212027',
        g5: '#28262F',
        g6: '#2F2D39',
        g7: '#383343',
        g8: '#474056',
        'test-color': '#00F',
        test: 'F00'
      },
      fontFamily: {
        sulphur: ['"Sulphur Point"', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        bold: '700',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}