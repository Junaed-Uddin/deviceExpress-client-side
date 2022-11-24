/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2563eb",

          "secondary": "#f4e790",

          "accent": "#f2187d",

          "neutral": "#1c1917",

          "base-100": "#f3f4f6",

          "info": "#7EC9ED",

          "success": "#16a34a",

          "warning": "#facc15",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
