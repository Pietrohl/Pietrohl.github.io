module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
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
      }
    },
  },
  variants: {
    fontSize: ['responsive'],
    fontSize: ['responsive', 'hover']
  },
  plugins: [],
}
