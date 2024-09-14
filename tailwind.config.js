/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'blog': "url('./images/carousel2.jpg')",
        'blog2': "url('./images/blog-01.jpg')",
        'blog3': "url('./images/blog-02.jpg')",
        'gl1': "url('./images/gallery-07.jpg')",
        'gl2': "url('./images/banner-07.jpg')",
        'gl3': "url('./images/banner-02.jpg')",
        'gl4': "url('./images/item-03.jpg')",
        'gl5': "url('./images/item-cart-01.jpg')",
        'about': "url('./images/about.png')",
        'glasses': "url('./images/banner-05.jpg')",
        'watch': "url('./images/item-05.jpg')",
        'guy': "url('./images/banner-04.jpg')",
        'pack': "url('./images/pack.jpg')",
        'banner3': "url('./images/banner-08.jpg')",

        
        
      }
    },
  },
  plugins: [],
}