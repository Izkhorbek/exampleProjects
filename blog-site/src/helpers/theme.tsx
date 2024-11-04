import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857d"
    },
    error: {
      main: red.A700
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default theme;