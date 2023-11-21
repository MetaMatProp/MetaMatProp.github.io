import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Arial', sans-serif;
        box-sizing: border-box;
        overflow-x: hidden;
        
    }

    html { 
        width: 100%;
        height: 100%;
    };

    body {
        margin: 0px;
        width: calc(100vw - (100vw - 100%));
    }
`;

export default GlobalStyle;
