import "src/styles/global-style.css";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../helpers/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { colors } from "@mui/material";
function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <ProgressBar
          height="4px"
          color={colors.blue[400]}
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ThemeProvider>
    </AppCacheProvider>
  );
}

export default App;
