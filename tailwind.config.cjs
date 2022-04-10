module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    themes: [
      "light", "dark", "bumblebee", "halloween", 'dracula', 'autumn',
      {
        'baker_light': {
          "primary": "#862616",
          "secondary": "#f2b30c",
          "accent": "#7e22ce",
          "neutral": "#b3baba",
          "base-100": "#ffe4e6",
          "info": "#3961DB",
          "success": "#61E5DA",
          "warning": "#FAD16B",
          "error": "#EC4B66",
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