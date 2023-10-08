/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#779684',
      'secondary': '#943C38',  
      'tertiary': '#D6AD77',    
      'white': '#fff',
      'black': '#000',
      'gray': 'rgba(244, 244, 244, 1)',
      'gray-100': 'rgba(0, 0, 0, 0.1)',
      'gray-300': 'rgba(0, 0, 0, 0.3)',
      'gray-500': 'rgba(0, 0, 0, 0.5)',
      'gray-190': 'rgba(0, 0, 0, 0.19)',
      'gray-800': 'rgba(12, 12, 12, 1)',
      'lightGray': 'rgba(255, 255, 255, 0.82)',
      'error': '#800d1a',
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
      },
      animation: {
        slide: 'slide 3s ease-out',
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
