/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // sidebr #202020
// min #272727
// boxes #323232
// current nvbr #2d2d2d
  theme: {
    colors: {
      'primary': '#779684',
      'secondary': '#943C38',  
      'tertiary': '#D6AD77',    
      'white': '#fff',
      'black': '#000',
      'gray': 'rgba(244, 244, 244, 1)',
      'card': '#A68799',
      'sidebar': '#F5F4B1',
      'card-bg': 'rgba(256, 256, 256, 0.4)',
      'progress': 'rgba(255, 255, 255, 0.6)'
    },
    fontFamily: {
      'headings': ['Poppins', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '32px'],
      '2xl': ['24px', '36px'],
      '3xl': ['36px', '42px'],
      '4xl': ['44px', '50px']
    },
    extend: {
      backgroundImage: {
        'hero': "url('./components/assets/bg.jpg')",
        'logo': "url('./components/assets/logo.png')"
      },
      height: {
        '128': '39rem',
        '130': '32rem'
      },
      width: {        
        '129': '59rem',
        '131': '30rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
