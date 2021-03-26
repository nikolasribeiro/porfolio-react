// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${ ({ theme }) => theme.body };
    color: ${ ({ theme }) => theme.text };
    height: 100vh;
    transition: all 0.25s linear;
  }

  h1{ color: ${ ({ theme }) => theme.text }; }
  h2{ color: ${ ({ theme }) => theme.text }; }
  h3{ color: ${ ({ theme }) => theme.text }; }
  h4{ color: ${ ({ theme }) => theme.text }; }
  h5{ color: ${ ({ theme }) => theme.text }; }
  h6{ color: ${ ({ theme }) => theme.text }; }

  i{ color: ${ ({ theme }) => theme.text }; }

  input[type="text"],
  input[type="email"]{
    color: ${ ({ theme }) => theme.text };
  }

  input[type="submit"]{
    color: ${ ({ theme }) => theme.text };
  }

  input[type="text"]::placeholder,
  input[type="email"]::placeholder{
    color: ${ ({ theme }) => theme.text };
  }

  textarea{
    color: ${ ({ theme }) => theme.text };
  }

  textarea::placeholder{
    color: ${ ({ theme }) => theme.text };
  }

  a{
    color: ${ ({ theme }) => theme.text };
  }
`