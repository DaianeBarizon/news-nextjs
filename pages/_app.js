  
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../style/index.css';

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  }

  body {
    background: #ffffff;
    color: #312E38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
  font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secundary: '#464646',
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
