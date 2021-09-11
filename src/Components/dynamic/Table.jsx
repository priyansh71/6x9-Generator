/** @format */

import React, { useState, useReducer } from "react";
import {
  Flex,
  useColorModeValue,
  useColorMode,
  Grid,
  GridItem,
  Button,
  Center,
} from "@chakra-ui/react";

import Input from "./Input";
import Course from "../static/Course";
import darkColors from "../static/darkColors";
import lightColors from "../static/lightColors";

function Table() {
  const { colorMode } = useColorMode();
  let [days, time] = [6, 9];
  const borderColor = useColorModeValue("gray.800", "gray.100");
  const buttonColor = useColorModeValue("teal.600", "teal.200");
  const empty = useColorModeValue("gray.100", "gray.800");
  const [table, setTable] = useState(Array(time * days).fill(null));

  const handleTable = (value) => {
    const course = Course.find((item) => item.ID === value);
    console.clear();
    let hour = course.Hour;
    let randomDark = darkColors[Math.floor(Math.random() * darkColors.length)];
    let randomLight =
      lightColors[Math.floor(Math.random() * lightColors.length)];
    course.Type === "Lecture" || "Tutorial"
      ? setTable((prev) => {
          let i;
          for (i = 0; i < course.Repeat - 1; i++) {
            hour[i + 1] = 2 * time + hour[i];
          }
          for (i = 0; i < 3; i++) {
            prev[hour[i]] = course;
            Object.assign(course, { darkColor: randomDark });
            Object.assign(course, { lightColor: randomLight });
          }

          return prev;
        })
      : setTable((prev) => {
          let i;
          for (i = 0; i < 3; i++) {
            prev[hour[i]] = course;
            Object.assign(course, { darkColor: randomDark });
            Object.assign(course, { lightColor: randomLight });
          }
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
        backgroundColor={buttonColor}
        _hover={{ background: { buttonColor } }}
        _focus={{ _focus: "none" }}
      >
        Add
      </Button>
      <Grid templateColumns="repeat(9,1fr)">
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
