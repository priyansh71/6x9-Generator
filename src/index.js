/** @format */

import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table.jsx";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import Warning from "./Components/dynamic/Warning";
import IconManager from "./Components/dynamic/IconManager";

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <IconManager />
      <Warning />
      <Table />
    </ChakraProvider>,
  document.getElementById("root")
);

