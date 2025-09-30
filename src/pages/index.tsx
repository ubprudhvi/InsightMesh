
import Head from "next/head";
import Script from "next/script";
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
// import { DefaultSeo } from 'next-seo';
// import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { FC } from "react";
import store from "@/store";


interface Props {
  Component: FC;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )

}

export default App