/** @format */

import React from "react";
import { Grid, GridItem, Center,useColorModeValue } from "@chakra-ui/react";

const Time = () => {
  const time = [ "8:00", "9:00" , "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
  const text = useColorModeValue("gray.900", "gray.100");

  return (
    <Grid className="TimeRow" h="80px" templateColumns="repeat(9, 1fr)" position="relative" display="flex" flexDir="row" alignItems="flex-end" left="4vw" >
      {time.map((item, index) => {
        return (
          <GridItem
          key={index}
            gap={2}
            h={["72.2px"]}
            width={["9vw" , "9vw", "9vw"]}
            borderWidth="0.5px"
            borderColor={text}
            backgroundColor="transparent"
            textColor={text}
            display={{
              xs : "none",
              sm : "none",
              md : "block",
              lg : "block"
        
            }}
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
