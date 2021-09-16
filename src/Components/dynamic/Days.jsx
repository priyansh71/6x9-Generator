import React from 'react'
import { Grid, GridItem, Center,  useColorModeValue } from "@chakra-ui/react";

const Days = () => {
    const days = ['Mon' , 'Tues', 'Wed', 'Thurs' , 'Fri' , 'Sat'];
    const text = useColorModeValue("gray.900", "gray.100");
    return (
        <Grid h="100px" templateColumns="repeat(1, 1fr)" position="relative" left="-42vw" top="24.9vh">
        {days.map((item, index) => {
          return (
            <GridItem
            key={index}
              gap={2}
              h="9vh"
              w="123px"
              border="1px"
              borderColor={text}
              backgroundColor="transparent"
              textColor={text}
            >
              <Center
                position="relative"
                top="30%"
                fontSize="0.88em"
                fontWeight="bold"
              >
                {item}
              </Center>
            </GridItem>
          );
        })}
      </Grid>
    )
}

export default Days
