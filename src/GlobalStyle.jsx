import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .App{
    max-width: 600px;
    margin: 0 auto;
    background-color: #888;
  }
  .counter{
    display: flex;
    justify-content: center;
    padding-top: 5px;
    background-color: black;
    button{
      width: 25px;
      height: 25px;
      font-weight: 700;
    }
    input{
      width: 200px;
    }
  }

`;
export default GlobalStyle;
