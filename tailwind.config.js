/** @type {import('tailwindcss').Config} */

const colors = {
    ...{
        
        "pallet1": {
            "500": "#252B48"
        }
    },
}

module.exports = {
  content: ["./Template/*.html"],
  theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },

      extend: {
        colors: {
          "pallet1":"#252B48",

          "pallet2":"#FFCC70",

          "pallet3":"#FFFADD",

          "pallet4":"#8ECDDD",

          "pallet5":"#22668D"
        },

        fontFamily: {
          IranSans: ['IRANSans']
        },
      }
      
  },
  plugins: [],
}

