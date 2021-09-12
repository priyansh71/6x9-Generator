import React from 'react';
import { Button } from '@chakra-ui/react';

const Manager = (props) => {

    return (
        <Button
            onClick={props.handler}
            mt="6"
            ml="9"
            color={props.textColor}
            backgroundColor={props.color}
            _hover={{ background: props.color }}
            _focus={{ _focus: "none" }}
          >
            {props.type}
          </Button>
    )
}

export default Manager
