/** @format */

import React from "react";
import { useColorModeValue, Center, Text } from "@chakra-ui/react";

const Header = () => {
  const box = useColorModeValue("gray.900", "gray.100");
  return (
    <label htmlFor="selector" style={{userSelect : "none"}}>
    <Center my="4">
      <Text fontSize={["25px", "30px", "38px"]} color={box} fontFamily="Nunito">
        Time-Table Renderer
      </Text>
    </Center>
    </label>
  );
};

export default Header;
