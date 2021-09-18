/** @format */

import React from "react";
import { useColorModeValue, Center, Text } from "@chakra-ui/react";

const Header = () => {
  const box = useColorModeValue("gray.900", "gray.100");
  return (
    <label htmlFor="selector">
    <Center my="2">
      <Text fontSize={["25px", "30px", "32px"]} color={box} >
        6x9 Generator
      </Text>
    </Center>
    </label>
  );
};

export default Header;
