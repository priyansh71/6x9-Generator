import { Center, Flex } from "@chakra-ui/layout";
import React from "react";

const Warning = () => {
  return (
    <Flex
      display={{
        xs: "block",
        sm: "block",
        md: "none",
        lg: "none",
      }}
      position="relative"
      top="50vh"
      margin="auto"
      fontSize="1.2em"
      overflowX="hidden"
    >
      <Center mx="10">
        Please switch to Landscape mode or a wider screen for utilizing the
        application.
      </Center>
    </Flex>
  );
};

export default Warning;
