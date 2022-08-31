import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bg: "#FFFFFF",
    text: "#dac6bb",
    one: "#e6c2a1",
    two: "#f6f4f3",
  },
  fonts: ["Source Serif Pro", "Source Sans Pro"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
