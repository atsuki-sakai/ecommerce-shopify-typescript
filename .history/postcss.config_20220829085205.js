
module.exports = {
  plugins: {
    "tailwindcss": {},
    "autoprefixer": {},
    "postcss-import": []
  },
}

// just for testing.

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import')
  ]
}
