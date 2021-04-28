import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Transat";
    src: local('Transat'), url("/fonts/transat_standard-webfont.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Transat";
    src: url("../fonts/transat_light-webfont.woff2") format("woff2");
    font-weight: lighter;
  }
  
  @font-face {
    font-family: "Transat";
    src: url("../fonts/transat_medium-webfont.woff2") format("woff2");
    font-weight: bold;
  }
  
  @font-face {
    font-family: "Transat";
    src: url("../fonts/transat_bold-webfont.woff2") format("woff2");
    font-weight: bolder;
  }

  @font-face {
    font-family: "Futura";
    src: url("/fonts/Futura-Book.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura";
    src: url("/fonts/Futura-Medium.ttf") format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura";
    src: url("/fonts/Futura-Heavy.ttf") format('truetype');
    font-weight: bolder;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura";
    src: url("/fonts/Futura-Light.ttf") format('truetype');
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: "Caslon";
    src: url("/fonts/ACaslonPro-Regular.otf") format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Caslon";
    src: url("/fonts/ACaslonPro-Semibold.otf") format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Caslon";
    src: url("/fonts/ACaslonPro-Bold.otf") format('opentype');
    font-weight: bolder;
    font-style: normal;
  }

  /* @font-face {
    font-display: ${props => props.fontDisplay || 'auto'};
    font-family: 'Catamaran';
    font-weight: 700;
    font-style: normal;
    src: local('Catamaran'),
        url('/public/fonts/Catamaran-Bold.eot?#iefix') format('embedded-opentype'),
        url('/public/fonts/Catamaran-Bold.woff2') format('woff2'),
        url('/public/fonts/Catamaran-Bold.ttf')  format('truetype'),
        url('/public/fonts/Catamaran-Bold.woff') format('woff');
  } */
  
    
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Futura", Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
`;

export default GlobalStyle;
