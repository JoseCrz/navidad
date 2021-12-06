import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"karmina-sans", "Helvetica", "Arial", sans-serif`,
    heading: `"ohno-blazeface"`,
  },
  colors: {
    brand: {
      red: "#bf0d23",
      green: "#083f24",
      greenLight: "#4d9c05",
      teal: "#1e6859",
      tealLighter: "#f0f8f6",
      cyan: "#58bcb9",
      text: {
        white: "#fcfcfc",
        red: "#720a0a",
        yellow: "#e1b63b",
        green: "#083f24",
        blue: "#154667",
      },
      bg: {
        yellow: "#e2b73b",
      },
    },
  },
});

export default theme;
