import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
/* Reset Css  (Necolas Reset Css) */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* Reset Css  (Necolas Reset Css) */


  body {
    font-family: sans-serif;
    background: #D9E6F6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles};

`


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

