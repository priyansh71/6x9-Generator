/** @format */

import React, { useState } from "react";
import {
  Select,
  useColorModeValue,
  Center,
  Button,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import Course from "../static/Course";

const Input = () => {
  const [value, setValue] = useState("");

  const { toggleColorMode } = useColorMode();
  const box = useColorModeValue("gray.900", "gray.100");
  return (
    <div>
      <Center mt="9">
        <Select
          placeholder="Select Course"
          size="md"
          w="md"
          borderWidth="1"
          borderColor={box}
          _focus={{ _focus: "none" }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          {Course.map((item, index) => {
            return (
              <option value={item.Code} key={index}>
                {item.Name}
              </option>
            );
          })}
        </Select>
      </Center>
      <Center mt="6">
        <Button
          onClick={toggleColorMode}
          colorScheme="purple"
          _focus={{ _focus: "none" }}
          fontFamily="Ubuntu Mono"
          fontWeight="lighter"
          fontSize="large"
          p="4"
        >
          Toggle Color
        </Button>
      </Center>
      <Center mt="5">
        <Box color={box}>{value}</Box>
      </Center>
    </div>
  );
};

export default Input;
