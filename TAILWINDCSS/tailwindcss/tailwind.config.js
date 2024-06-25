/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#22c55e',
      'red': '#dc2626',
      '500': '#64748b',
      '200': '#e2e8f0',
      '900' : '#0f172a',
      '700' :'#374151',
      '300' : '#cbd5e1',
      '400' :'#94a3b8',
      'violet' : '#8b5cf6',
      '600' :'#65a30d',
      'black': '#27272a',
      'slate': '#1e293b',
      'gray' : '#d1d5db',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    extend: {
      spacing: {
        '18px': '18px',
      }
    }
  },
}