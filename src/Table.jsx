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
import Header from "./Components/dynamic/Header";
import AddItem from "./Components/dynamic/AddItem";
import Course from "./Components/static/Course";
import darkColors from "./Components/static/darkColors";
import lightColors from "./Components/static/lightColors";
import Time from "./Components/dynamic/Time";
import Days from "./Components/dynamic/Days";
import RemoveItem from "./Components/dynamic/RemoveItem";

function Table() {
  //coloring
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.800", "gray.100");
  const addButtonColor = useColorModeValue("teal.600", "teal.200");
  const removeButtonColor = useColorModeValue("red.600", "red.200");
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
            ? (hour[i + 1] = hour[i] + 1)
            : (hour[i + 1] = 2 * time + hour[i]);
        }
        for (i = 0; i < 3; i++) {
          prev[hour[i]] = course;
          Object.assign(course, { darkColor: randomDark });
          Object.assign(course, { lightColor: randomLight });
        }

        return prev;
      });
    }
  };

  // force rerender
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleRemove = (id) => {
    setTable((prev) => {
      prev.forEach((element, index) => {
        if (element && id === element.Name) {
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
      <Box display="flex" flexDir="column" mt="5" mb="10">

        <AddItem
          handleTable={handleTable}
          handleState={() => forceUpdate()}
          textColor={empty}
          color={addButtonColor}
        />

        <RemoveItem
          handleRemove={(thing) => handleRemove(thing)}
          handleState={() => forceUpdate()}
          textColor={empty}
          color={removeButtonColor}
        />
      </Box>
      <Time />
      <Days />
      <Grid
        templateColumns="repeat(9,1fr)"
        position="relative"
        left="4vw"
        top="-100px"
        display ={{
          xs : "none",
          sm : "none",
          md : "grid",
          lg : "grid"
        }}
        
      >
        {table.map((item, index) => {
          return item ? (
            <GridItem
              key={index}
              h={["50px", "9vh"]}
              opacity="0.95"
              w={["50px", "9vw"]}
              borderColor="transparent"
              fontFamily="Fira Code"
              backgroundColor={
                colorMode === "light" ? item.darkColor : item.lightColor
              }
              color={empty}
              fontWeight="900"
            >
              <Center
                position="relative"
                top={["0%", "25%", "20%"]}
                fontSize={{
                  xs : "0",
                  sm : "0",
                  md : "11px",
                  lg: "0.84em"
                }}
                verticalAlign="center"
                mx="2"
                my="auto"
              >
                {item.Code}
                <br />
                {item.Type}
                <MinusIcon
                  onClick={() => handleRemove(item.Name)}
                  position="relative"
                  top="-6"
                  right="-3"
                  display={{
                    xs : "none",
                    sm : "none",
                    md : "none",
                    lg: "block"
                  }}
                  color={empty}
                  fontSize="1em"

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