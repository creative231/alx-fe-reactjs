module.exports = {
  plugins: {
    // Tailwind's PostCSS plugin moved to a separate package. Use
    // @tailwindcss/postcss here so PostCSS loads the correct plugin.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
