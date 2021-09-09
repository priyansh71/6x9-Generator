/** @format */

import React, { useState } from "react";
import {
  Grid,
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  Button,
  Center,
  GridItem,
  Text,
} from "@chakra-ui/react";

export const Table = () => {
  const { toggleColorMode } = useColorMode();
  let [days, time] = [6, 9];
  const box = useColorModeValue("gray.900", "gray.100");
  const height = "8vh";
  const borderWidth = "0.9px";
  const [table, setTable] = useState(
    Array(time)
      .fill()
      .map(() => Array(days).fill([]))
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="8"
    >
      <Center mb="8">
        <Text fontSize="3xl" color={box}>
          Time-Table
        </Text>
      </Center>
      <Box>
        {table.map((item, index) => {
          return (
            <Grid
              templateColumns="repeat(9, 1fr)"
              gap={0.5}
              key={index}
              display="flex"
              flexDirection="row"
            >
              {item.map((a, b) => {
                return (
                  <GridItem
                    w="12vw"
                    h={height}
                    borderColor={box}
                    borderWidth={borderWidth}
                    key={b}
                    mb="0.5"
                    boxShadow="base"
                  />
                );
              })}
            </Grid>
          );
        })}
      </Box>
      <Center mt="6">
        <Button
          onClick={toggleColorMode}
          colorScheme="purple"
          _focus={{ _focus: "none" }}
          fontFamily="Ubuntu Mono"
          fontWeight="lighter"
          fontSize="xl"
          p="6"
        >
          Toggle Color
        </Button>
      </Center>
    </Flex>
  );
};

export default Table;