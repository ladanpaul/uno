import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        "black-normal": "#333333",
        "dark-gray": "#666666",
        grey: "#EBEBEB",
        lila: "#647272",
        red: "#e8434c",
        blue: "#36a3d0",
        yellow: "#e1c644",
        green: "#707175",
      },
      width: {
        fit: "fit-content",
      },
      spacing: {
        "3px": "0.1875rem",
        "5r": "1.25rem",
        "1.5r": "1.5rem",
        "1.75r": "1.75rem",
        "7": "1.875rem",
        "14.5": "3.6875rem",
        "9r": "9rem",
        "10r": "10rem",
        "15r": "15rem",
        "20r": "20rem",
        xxs: "0.625rem",
        xl: "1.3125rem",
      },
    },
  },
});
