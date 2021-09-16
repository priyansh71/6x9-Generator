import { Center, Flex } from '@chakra-ui/layout'
import React from 'react'

const Warning = () => {
    return (
        <Flex display={{
            xs : "block",
            sm : "block",
            md : "none",
            lg : "none"
          }}
          position="relative"
          top="50vh"
          margin="auto"
          fontSize="1.2em"
          overflowX="hidden"
          >
              <Center mx="5">
              Please switch to Landscape mode or a wider device for maximum performance.

              </Center>
        </Flex>
    )
}

export default Warning
