/** @format */

import React, { useState, useReducer } from "react";
import {
  Flex,
  useColorModeValue,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

import Input from "./Input";
import Course from "../static/Course";

function Table() {
  let [days, time] = [6, 9];
  const box = useColorModeValue("gray.700", "gray.100");
  const empty = useColorModeValue("gray.100", "gray.800");
  const [table, setTable] = useState(Array(time * days).fill(null));

  const handleTable = (value) => {
    const course = Course.find((item) => item.Code === value);
    let hour = course.Hour;
    setTable((prev) => {
      prev[hour] = course;
      return prev;
    });
  };

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="1"
      mb="2"
    >
      <Input handleTable={handleTable} />
      <Button
        onClick={() => forceUpdate()}
        mt="6"
        mb="7"
        color={empty}
        backgroundColor={box}
        _hover={{ background: { box } }}
        _focus={{ _focus: "none" }}
      >
        {" "}
        Submit
      </Button>
      <Grid templateColumns="repeat(9,1fr)">
        {table.map((item, index) => {
          return item ? (
            <GridItem
              key={index}
              h="9vh"
              w="9vw"
              borderWidth="0.6px"
              borderColor={box}
              background={box}
            />
          ) : (
            <GridItem
              key={index}
              h="9vh"
              w="9vw"
              borderWidth="0.6px"
              borderColor={box}
              backgroundColor={empty}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Table;
