// // import "@/styles/globals.css";
// // import type { AppProps } from "next/app";

// // export default function App({ Component, pageProps }: AppProps) {
// //   return <Component {...pageProps} />;
// // }

// import Head from "next/head";
// import Script from "next/script";
// import { SessionProvider } from "next-auth/react"
// import { Provider } from 'react-redux';
// // import { DefaultSeo } from 'next-seo';
// // import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import { FC } from "react";
// import store from "@/store";
// import { appWithTranslation } from 'next-i18next';


// interface Props {
//   // Component: FC;
//   pageProps: any;
// }

// const App: FC<Props> = ({ Component, pageProps }) => {

//   return (
//     <>
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     </>
//   )

// }

// export default appWithTranslation(App)


import { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from "@/store";
import { appWithTranslation } from 'next-i18next';
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
