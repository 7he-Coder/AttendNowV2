/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./HTML/**/*.html",
    "./JS/*.js",
    "./CSS/*.css",
  ],
  theme: {
    extend: {
      colors: {
        // background colors 
        // 'bgHeader': '#c6303e',
        'bgHeader': '#dc2626',
        'universal': '#BB2323',
        'bgPrimary': '#161616',
        'bgSecondary': "#DC2626",
        'bgSuccess': '#dc26261c',
        'countryBtn': '#323232',
        'lightPurple': '#ac3cf7',
        'darkBlue': '#4329ba',
        'heroBtn': '#7c69ba',
        'priceBg': '##c7c7c7',
        'priceBtncolor': '#911dff',
        'primeColor': '#9757bf',

        // text colors
        'textPrimary': '#B10707s',
        'textSecondary': '#374151',
      },
      fontSize: {
        'paraTextmd': '17px',
        'paraTextlg': '22px',
        'paraTextxl': '25px',
        'paraText2xl': '27px',
      },
      fontFamily: {
        futura: ["FuturaLig", "Futura Book", "sans-serif"],
        futuraLg: ["FuturaLig"],
        futuraBk: ["Futura Book"],
        futuraMd: ["Futura LT W01 Medium"],
      },
      backgroundImage: {
        // 'heroGradient': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #8786BE 0%, 20%, rgba(135, 134, 190, 0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(124, 105, 186, 0.99) 0%, 25%, rgba(124, 105, 186, 0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #42419E 0%, 42%, rgba(66, 65, 158, 0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #9757BF 0%, 42%, rgba(151, 87, 191, 0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255, 255, 255, 0) 100%)',

        // 'heroGradient': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #dc2626 0%, 20%, rgba(135, 134, 190, 0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, #bb2323 0%, 25%, rgba(124, 105, 186, 0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #9A2121 0%, 42%, rgba(66, 65, 158, 0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #9A2121 0%, 42%, rgba(151, 87, 191, 0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #ffffff 0%, 100%, rgba(255, 255, 255, 0) 100%)',

        'heroGradient': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #bd3838d4 0%, 20%, rgba(135, 134, 190, 0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, #dd4a4a 0%, 25%, rgba(124, 105, 186, 0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #bd2424 0%, 42%, rgba(66, 65, 158, 0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #d23939 0%, 42%, rgba(151, 87, 191, 0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #ffffff 0%, 100%, rgba(255, 255, 255, 0) 100%)',
      },
      listStyleImage: {
        checkmark: 'url("./dist/assets/checkmark.png")',
      },
    },
  },
  plugins: [
  ],
}