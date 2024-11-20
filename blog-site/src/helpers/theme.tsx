import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857d",
    },
    error: {
      main: red.A700,
    },
    grey: {
      "800": grey[800],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
