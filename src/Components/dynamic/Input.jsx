/** @format */

import React, { useState } from "react";
import {
  Select,
  useColorModeValue,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import Course from "../static/Course";

const Input = (props) => {
  const [value, setValue] = useState();
  const box = useColorModeValue("gray.900", "gray.100");

  return (
    <div>
      <Center my="2">
        <Text fontSize="3xl" color={box}>
          Time-Table
        </Text>
      </Center>
      <Center mt="9">
        <Select
          placeholder="Select Course"
          size="md"
          w="md"
          borderWidth="1"
          borderColor={box}
          _focus={{ focus: "none" }}
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
        <Button
          display="none"
          type="submit"
          onClick={value ? props.handleTable(value) : null}
        ></Button>
      </Center>
    </div>
  );
};

export default Input;
