module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
    inset: {
     '1/2': '50%',
    },    
    maxWidth: {
      min:	'min-content',
      max:	'max-content',
    },
      minHeight: {
        almostscreen: '86vh',
        halfscreen: '50vh',
      },
      zIndex: {
        '-10': '-10', 
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
        white: '0 1px 3px 0 rgba(255,255,255, 0.5)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        slider: {
          '0%, 20%, 100%': {left: '0'},
          '25%, 45%': {left: '-100%'},
          '50%, 70%': {left: '-200%'},
          '75%, 95%': {left: '-300%'},
        }
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      }
    },
  },
  variants: {
    fontSize: ['responsive'],
    fontSize: ['responsive', 'hover']
  },
  plugins: [],
}
