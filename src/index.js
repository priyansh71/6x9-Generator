/** @format */

import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table.jsx";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import ColorMode from "./Components/dynamic/ColorMode";
import Warning from "./Components/dynamic/Warning";

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <ColorMode />
      <Warning />
      <Table />
    </ChakraProvider>,
  document.getElementById("root")
);

