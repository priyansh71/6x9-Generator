import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Tooltip,
  Container,
  useColorMode,
  Icon,
  Link,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Modal = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const box = useColorModeValue("gray.900", "white");
  return (
    <Container>
      <Tooltip label="Reset the table">
        <Icon
          position="absolute"
          top="0"
          right="100px"
          m="4"
          color={box}
          fontSize="2.7em"
          fontWeight="bold"
          onClick={props.handling}
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
      <Tooltip label="Toggle Color mode">
        <Box
          onClick={toggleColorMode}
          position="absolute"
          top="1px"
          right="60px"
          m="3.5"
          cursor="pointer"
        >
          {colorMode === "light" ? (
            <MoonIcon color="gray.900" fontSize="3xl" />
          ) : (
            <SunIcon color="gray.100" fontSize="3xl" />
          )}
        </Box>
      </Tooltip>
      <Link href="https://github.com/priyansh71/6x9-Generator">
        <Icon
          color={box}
          fontSize="2em"
          position="absolute"
          top="0"
          right="5px"
          m="3.5"
          cursor="pointer"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </Icon>
      </Link>
      <Center mx="4" mb="2" position="absolute" bottom="0" right="0">
        <Text fontSize={["16px"]} color={box}>
          Copyright, Priyansh Vyas, 2021.
        </Text>
      </Center>
    </Container>
  );
};

export default Modal;
