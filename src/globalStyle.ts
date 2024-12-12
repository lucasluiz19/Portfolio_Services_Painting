import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "roboto", sans-serif;
        
        
    }
    html {
      scroll-behavior: smooth;
    }
    body{
        
        background: #363946;
        font-size: 1.12rem;
        overflow-x: hidden;
        position: relative;
        scroll-behavior: smooth;
        
    };
    
    
`

//#122C34