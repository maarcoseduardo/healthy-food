import GlobalStyle from '../styles/GlobalStyle';

export const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Component {...pageProps} />
    <GlobalStyle />
    </>
  )
};

export default MyApp;
