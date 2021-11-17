import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border: none;
  background: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.colors.text};
  }
`;

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    transition: background-color 0.4s, color 0.1s !important;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Roboto, sans-serif;
  }

  h1, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  @media(min-width: 320px) {
    html {
      font-size: 70%;
    }
  }

  @media(min-width: 375px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(min-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(min-width: 1080px) {
    html {
      font-size: 100%;
    }
  }
`;
