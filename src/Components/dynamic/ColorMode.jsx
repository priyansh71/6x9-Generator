/** @format */

import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Box, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box onClick={toggleColorMode} position="absolute" top="0" right="2" m="4">
      {colorMode === "light" ? (
        <MoonIcon color="gray.900" fontSize="3xl" />
      ) : (
        <SunIcon color="gray.100" fontSize="3xl" />
      )}
    </Box>
  );
};

export default ColorMode;
