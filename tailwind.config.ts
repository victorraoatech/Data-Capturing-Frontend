import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ["New Amsterdam", "serif"],
         "circular-std": ['"Circular Std"', "sans-serif"],
      },
      colors: {
        "lrnrkia-verydark-gray": "rgba(36, 38, 49, 1)",
        "lrnrkia-dark-gray": "rgba(81, 82, 90, 1)",
        "lrnrkia-medium-gray": "rgba(126, 127, 133, 1)",
        "lrnrkia-light-gray": "rgba(206, 207, 209, 1)",
        "lrnrkia-verydark-teal": "rgba(34, 61, 93, 1)",
        "lrnrkia-dark-teal": "rgba(0, 162, 232, 1)",
        "lrnrkia-medium-teal": "rgba(36, 211, 229, 1)",
        "lrnrkia-light-teal": "rgba(178, 248, 255, 1)",
        "lrnrkia-verylight-teal": "rgba(241, 247, 254, 1)",
        "lrnrkia-medium-orange": "rgba(253, 193, 64, 1)",
        "lrnrkia-light-orange": "rgba(250, 212, 132, 1)",
        "lrnrkia-pink": "rgba(250, 70, 131, 1)",
        "lrnrkia-purple": "rgba(134, 98, 235, 1)",
        "lrnrkia-black": "rgba(0, 0, 0, 1)",
        "lrnrkia-white": "rgba(255, 255, 255, 1)",
        "lrnrkia-pale-white": "rgba(246, 247, 251, 1)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
            height: "0",
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
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  
//   plugins: [require("tailwindcss-animate")],
};
export default config;
