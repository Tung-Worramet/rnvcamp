/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#dc2626", // แดง
          foreground: "#f9fafb",
        },
        secondary: {
          DEFAULT: "#374151", // เทาดำ
          foreground: "#f9fafb",
        },
        accent: {
          DEFAULT: "#fee2e2", // แดงอ่อน
          foreground: "#1f2937",
        },
        muted: {
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        luxury: {
          dark: "#1f1f1f", // ดำพาสเทล
          charcoal: "#2d2d2d", // ถ่านเข้ม
          silver: "#9ca3af", // เงิน
          platinum: "#e5e7eb", // แพลทินัม
          pearl: "#f9fafb", // ไข่มุก
          red: "#dc2626", // แดงหลัก
          "red-light": "#fee2e2", // แดงอ่อน
          "red-dark": "#991b1b", // แดงเข้ม
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
