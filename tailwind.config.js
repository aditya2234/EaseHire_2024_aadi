/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        footerBg: 'var(--footer-bg-color)',
        footerText: 'var(--footer-text-color)',
        footerLink: 'var(--footer-link-color)',
        footerLinkHover: 'var(--footer-link-hover-color)',
      },
    },
  },
  plugins: [],
}
