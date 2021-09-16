/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  xs : "0px",
  sm: "500px",
  md: "700px",
  lg: "1050px"
})
// 3. Extend the theme
const theme = extendTheme({ breakpoints })

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
  document.getElementById("root")
);

export default App;
