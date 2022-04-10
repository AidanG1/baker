module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    themes: [
      "light", "dark", "bumblebee", "halloween", 'dracula', 'autumn',
      {
        'baker_light': {
          "primary": "#FCBA04",
          "secondary": "#FCBA04",
          "accent": "#7e22ce",
          "neutral": "#b3baba",
          "base-100": "#ffe4e6",
        },
      },
      {
        'baker_dark': {
          "primary": "#FCBA04",
          "secondary": "#590004",
          "accent": "#A50104",
          "neutral": "#474747",
          "base-100": "#250001",
        },
      }
    ]
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
};