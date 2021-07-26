import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 } 

 html {
     fotn-size: 62.5%;
 }

 body {
     background: #ffffff;
 }

 button {
     font-weight: bold;
     font-size: 1.1rem;
     cursor: pointer;
     padding: 0.7rem 1.4rem;
     border: 0.1rem solid #129CF3;
     border-radius: 0.3rem;
     background: #129CF3;
     color: lightgreen;
     &:hover{
         background: #129CF3;
         color: white;
     }
     }
 }
`;

export default GlobalStyle;
