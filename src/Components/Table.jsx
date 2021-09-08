/** @format */

import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  useColorModeValue,
  useColorMode,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";

const Search = () => {
  const { toggleColorMode } = useColorMode();
  let [days, time] = [6, 9];
  const empty = Array(6).fill([])
  const box = useColorModeValue("gray.900", "gray.100");
  const height = 14;
  const borderWidth = "0.7px";
  const [table, setTable] = useState(
    Array(days)
      .fill()
      .map(() => Array(time).fill([]))
  );

  return (
    <Container w="container.lg" mt="32">
      <Center mb="14">
        <Text fontFamily="mono" fontSize="3xl" color={box}>
          Time-Table
        </Text>
      </Center>
      {table.map((item, index) => {
        return (
          <Grid templateColumns="repeat(6, 1fr)" gap={0.02} key={index}>
            {empty.map((a, b) => {
              return (
                <Box
                  w="100%"
                  h={height}
                  borderColor={box}
                  borderWidth={borderWidth}
                  key={b}
                />
              );
            })}
          </Grid>
        );
      })}
      <Center mt="10">
        <Button
          onClick={toggleColorMode}
          colorScheme="purple"
          _focus={{ _focus: "none" }}
          fontFamily="sans-serif"
          letterSpacing="0.5px"
          fontWeight="normal"
          fontSize="xl"
          p="6"
        >
          Toggle Color
        </Button>
      </Center>
    </Container>
  );
};

export default Search;
