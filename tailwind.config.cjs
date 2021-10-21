module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      DIN: ["DIN"],
      'roboto' :['"Roboto Mono"', 'monospace'],
    },
    extend: {
      fontSize: {
        'xxs': ['0.60rem', {lineHeight:'1rem'}],
      },
      borderWidth: {
        '1': '1px',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#374151', // gray-700
          'primary-focus': '#4B5563', // gray-600
          'primary-content': '#ffffff',
          'secondary': '#f07400',
          'secondary-focus': '#bd5b00',
          'secondary-content': '#0d9df8',
        },
      },
    ],
  },
}
