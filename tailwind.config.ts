import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/spinner.js",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "skeleton-loading": {
          '0%': {"background-color": "hsl(0 0% 95%)" },
          '100%': {"background-color": "hsl(0 0% 80%)"}
        }
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px'
    }
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#ffb340",
            100: "#ffb340",
            200: "#ffb340",
            300: "#ffb340",
            400: "#ffb340",
            500: "#ffb340",
            600: "#ffb340",
            700: "#ffb340",
            800: "#ffb340",
            900: "#ffb340",
            DEFAULT: "#ffb340"
          }
        }
      },
      dark: {
        colors: {
          primary: {
            50: "#ffb340",
            100: "#ffb340",
            200: "#ffb340",
            300: "#ffb340",
            400: "#ffb340",
            500: "#ffb340",
            600: "#ffb340",
            700: "#ffb340",
            800: "#ffb340",
            900: "#ffb340",
            DEFAULT: "#ffb340"
          }
        }
      }
    }
  })],
};
export default config;
