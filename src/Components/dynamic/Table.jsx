/** @format */

import React, { useState } from "react";
import { Flex, useColorModeValue ,Grid, GridItem } from "@chakra-ui/react";
import Input from "./Input";
import Course from "../static/Course";

function Table() {
  let [days, time] = [6, 9];
  const box = useColorModeValue("gray.900", "gray.100");
  const [table, setTable] = useState(
    Array(time*days)
      .fill(null)
  );

  const handleTable = (value) => {
    const course = Course.find((item) => item.Code === value);
    let hour = course.Hour
    setTable((prev) => {
      prev[hour] = course;
      return prev;
  })}

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="1"
      mb="2"
    >
      <Input handleTable={handleTable} />
      <Grid templateColumns="repeat(9,1fr)" >
        {table.map((item, index) => {
          return (
           item ? 
            <GridItem
              key={index}
              h="9vh"
              w="9vw"
              borderWidth="0.6px"
              borderColor={box}
              background="grey"
            />
            :
            <GridItem
              key={index}
              h="9vh"
              w="9vw"
              borderWidth="0.6px"
              borderColor={box}
              backgroundColor="white"
            />
          
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Table;
