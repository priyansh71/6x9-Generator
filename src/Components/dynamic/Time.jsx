/** @format */

import React from "react";
import { Grid, GridItem, Center,useColorModeValue } from "@chakra-ui/react";

const Time = () => {
  const time = [ "8:00", "9:00" , "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
  const text = useColorModeValue("gray.900", "gray.100");

  return (
    <Grid h="100px" templateColumns="repeat(9, 1fr)" position="relative" left="4vw" top="0.5">
      {time.map((item, index) => {
        return (
          <GridItem
          key={index}
            gap={2}
            h="85px"
            w="9vw"
            borderWidth="0.5px"
            borderColor={text}
            backgroundColor="transparent"
            textColor={text}
          >
            <Center
              position="relative"
              top="30%"
              fontSize="0.88em"
              fontWeight="semibold"
            >
              {item}
            </Center>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Time;
