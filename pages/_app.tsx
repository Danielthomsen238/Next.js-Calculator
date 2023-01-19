import type { AppProps } from "next/app";
import Head from "next/head";
import "../src/styles/GlobalStyles.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Calculator</title>
        <meta name="description" content="Next.js Calculator with typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
