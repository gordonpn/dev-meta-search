import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import theme from "src/theme";
import React, { ReactElement } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Meta Search Engine for Developers</title>
        <meta
          name="description"
          content="Search for developer references using the powerful Google Search Engine"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Solway:wght@800&display=swap"
          rel="stylesheet"
        />
        <meta name="monetization" content="$ilp.uphold.com/RKA9rkK4w9PD" />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
