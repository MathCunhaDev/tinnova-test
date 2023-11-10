import { createGlobalStyle } from "styled-components";
import "react-toastify/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: white;

    position: relative;
    min-height: 100%;
    font-feature-settings: 'kern';
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }

  body, input, textarea, button, ul, li, a, b, p, span {
    font-family: 'Roboto', sans-serif;
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;
