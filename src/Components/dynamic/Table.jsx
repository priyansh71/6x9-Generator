/** @format */

import React, { useState, useReducer } from "react";
import {
  Flex,
  useColorModeValue,
  useColorMode,
  Grid,
  GridItem,
  Center,
  Box,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import Header from "./Header";
import AddItem from "./AddItem";
import Course from "../static/file";
import darkColors from "../static/darkColors";
import lightColors from "../static/lightColors";
import Time from "./Time";
import Days from "./Days";

function Table() {
  //coloring
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.800", "gray.100");
  const addButtonColor = useColorModeValue("teal.600", "teal.200");
  const empty = useColorModeValue("gray.100", "gray.800");

  // array handling
  let [days, time] = [6, 9];
  const [table, setTable] = useState(Array(time * days).fill(null));

  const handleTable = (value) => {
    const course = Course.find((item) => item.Name === value);
    if (course) {
      let hour = course.Hour;
      let randomDark =
        darkColors[Math.floor(Math.random() * darkColors.length)];
      let randomLight =
        lightColors[Math.floor(Math.random() * lightColors.length)];
        setTable((prev) => {
            let i;
            for (i = 0; i < course.Repeat - 1; i++) {
              course.Type === "Lab"
              ? 
              hour[i+1] = hour[i] + 1
              :
              hour[i + 1] = 2 * time + hour[i]
            }
            for (i = 0; i < 3; i++) {
              prev[hour[i]] = course;
              Object.assign(course, { darkColor: randomDark });
              Object.assign(course, { lightColor: randomLight });
            }

            return prev;
          })
    }
  };

  // force rerender
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleRemove = (id) => {
    setTable((prev) => {
      prev.forEach((element, index) => {
        if (element && id === element.ID) {
          prev[index] = null;
        }
      });
      return prev;
    });
    forceUpdate();
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb="2"
    >
      <Header />
      <Box display="flex" flexDir="row" mt="5" mb="-10">
        <AddItem
          handleTable={handleTable}
          handleState={() => forceUpdate()}
          textColor={empty}
          color={addButtonColor}
        />
      </Box>
      <Days />
      <Time />
       <Grid templateColumns="repeat(9,1fr)" position="relative" left="4vw">
        {table.map((item, index) => {
          return item ? (
            <GridItem
              key={index}
              h="9vh"
              opacity="0.95"
              w="9vw"
              borderColor="transparent"
              backgroundColor={
                colorMode === "light" ? item.darkColor : item.lightColor
              }
              color={empty}
            >
              <Center
                position="relative"
                top="20%"
                fontSize="0.88em"
                fontWeight="bold"
              >
                {item.Code}
                <br />
                {item.Type}
                <MinusIcon
                  onClick={() => handleRemove(item.ID)}
                  position="relative"
                  top="-5"
                  right="-3"
                  fontSize="1em"
                  color={empty}
                />
              </Center>
            </GridItem>
          ) : (
            <GridItem
              key={index}
              h="9vh"
              w="9vw"
              borderWidth="0.02px"
              borderColor={borderColor}
              backgroundColor={empty}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Table;
