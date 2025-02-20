module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure you are scanning the right directories
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Add other custom colors here
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      // Extend other custom properties
    },
  },
  plugins: [],
};

