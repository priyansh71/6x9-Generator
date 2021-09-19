import React, { useState, useReducer } from "react";
import {
  Flex,
  useColorModeValue,
  useColorMode,
  Grid,
  GridItem,
  Center,
  Tooltip,
  Icon,
  Box,
  useToast
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import Header from "./Components/dynamic/Header";
import ManageInput from "./Components/dynamic/ManageInput";
import Course from "./Components/static/Course";
import darkColors from "./Components/static/darkColors";
import lightColors from "./Components/static/lightColors";
import Time from "./Components/dynamic/Time";
import Days from "./Components/dynamic/Days";

function Table() {
  const toast = useToast();
  //coloring
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.800", "gray.100");
  const addButtonColor = useColorModeValue("teal.700", "green.100");
  const removeButtonColor = useColorModeValue("red.600", "red.200");
  const empty = useColorModeValue("gray.100", "gray.800");
  const reload = useColorModeValue("blue.900", "cyan.300");

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
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mb="2"
      >
        <Header />
        <Box
          display="flex"
          mt="5"
          mb="5"
          flexDir="row"
          justifyContent="flex-start"
        >
          <ManageInput
            handleTable={handleTable}
            handleState={() => forceUpdate()}
            textColor={empty}
            addColor={addButtonColor}
            removeColor={removeButtonColor}
            handleRemove={handleRemove}
          />

          <Tooltip label="Reset the table">
            <Icon
              ml="8"
              my="5"
              color={reload}
              fontSize="2.65em"
              fontWeight="bold"
              onClick={() => {
                setTable(Array(time * days).fill(null))
                toast({
                  title: "Table has been reset.",
                  status: "success",
                  duration: 1200,
                  isClosable: false,
                  variant: "left-accent",
                  position:"bottom"
                  
                })
              }
              }
              cursor="pointer"
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              }}
            >
              <path
                fill="currentColor"
                d="M13.6,2.4 C12.2,0.9 10.2,0 8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C11.7,16 14.8,13.4 15.7,10 L13.6,10 C12.8,12.3 10.6,14 8,14 C4.7,14 2,11.3 2,8 C2,4.7 4.7,2 8,2 C9.7,2 11.1,2.7 12.2,3.8 L9,7 L16,7 L16,0 L13.6,2.4 L13.6,2.4 Z"
              />
            </Icon>
          </Tooltip>
        </Box>
        <Time />
        <Days />
        <Grid
          templateColumns="repeat(9,1fr)"
          position="relative"
          left="4vw"
          top="-100px"
          display={{
            xs: "none",
            sm: "none",
            md: "grid",
            lg: "grid",
          }}
        >
          {table.map((item, index) => {
            return item ? (
              <GridItem
                key={index}
                h={["72.2px"]}
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
                    xs: "0",
                    sm: "0",
                    md: "11px",
                    lg: "0.82em",
                  }}
                >
                  <Tooltip label={item.Section}>
                    <Box cursor="default">
                    {item.Code}
                      <br />
                      {item.Type}
                      </Box>
                    </Tooltip>
                    <MinusIcon
                      onClick={() => handleRemove(item.Name)}
                      position="relative"
                      transform="translate(80%,-120%)"
                      display={{
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      }}
                      color={empty}
                      fontSize="1.09em"
                      cursor="pointer"
                    />
                </Center>
              </GridItem>
            ) : (
              <GridItem
                key={index}
                h={["72.2px"]}
                w="9vw"
                borderWidth="0.02px"
                borderColor={borderColor}
                backgroundColor={empty}
              />
            );
          })}
        </Grid>
      </Flex>
    </div>
  );
}

export default Table;
