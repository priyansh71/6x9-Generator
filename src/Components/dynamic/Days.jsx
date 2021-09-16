/** @format */

import React from "react";
import { Grid, GridItem, Center, useColorModeValue } from "@chakra-ui/react";

const Days = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const text = useColorModeValue("gray.900", "gray.100");
  return (
    <Grid
      className="DaysCol"
      h="100px"
      templateColumns="repeat(1, 1fr)"
      display={{
        xs : "none",
        sm: "none",
        md: "block",
        lg: "block",
      }}
      position="relative"
      left="-40.5vw"
      top=""
    >
      {days.map((item, index) => {
        return (
          <GridItem
            key={index}
            gap={1}
            h="9vh"
            w={["50px", "100px", "123px"]}
            border="1px"
            borderColor={text}
            backgroundColor="transparent"
            textColor={text}
          >
            <Center
              position="relative"
              top="30%"
              left={["-5px", "-8px", "0"]}
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

export default Days;
