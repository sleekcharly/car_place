// craco.config.js
// **This configures webpack to enable tailwind
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
