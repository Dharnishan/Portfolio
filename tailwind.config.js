/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: "#09090b",
        secondary: "#ffffff",
        accent: "#3b82f6", // Blue accent color
        "accent-dark": "#1d4ed8",
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          "hero-font": ["Poppins", "sans-serif"],
        },
        animation: {
          "bounce-slow": "bounce 3s infinite",
          "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          float: "float 6s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
        },
        boxShadow: {
          skill: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
