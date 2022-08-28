
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
    
//   },
// }

// just for testing.

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import')
  ]
}
