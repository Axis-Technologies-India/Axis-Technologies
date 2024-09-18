/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image1': "url('https://www.silmax.it/wp-content/uploads/Utensili-speciali.jpg')",
        'custom-image2': "url('https://www.silmax.it/wp-content/uploads/TAP_S-Maschi-Tap-Standard.jpg')",
        // 'custom-image3': "url('https://shop.haimer.com/thumbnail/26/65/fd/1682589486/asset-116396-22891_1920x1920.jpg')",
        // 'custom-image5': "url('https://www.silmax.it/wp-content/uploads/Utensili-speciali.jpg')",
      },
      colors:{
        primaryColor:'#F77613'
      }
    },
  },
  plugins: [],
}