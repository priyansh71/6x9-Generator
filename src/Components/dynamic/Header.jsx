/** @format */

import React from "react";
import { useColorModeValue, Center, Text } from "@chakra-ui/react";

const Header = () => {
  const box = useColorModeValue("gray.900", "gray.100");
  return (
    <Center my="4">
      <Text fontSize="3xl" color={box}>
        Time-Table
      </Text>
    </Center>
  );
};

export default Header;
