/** @format */

import React, { useState } from "react";
import { Input, useColorModeValue, Button } from "@chakra-ui/react";
import Course from "../static/file";

const RemoveItem = (props) => {
  const [setter, setsetter] = useState("");
  const box = useColorModeValue("gray.400", "gray.200");
  const focus = useColorModeValue("gray.500", "gray.100");

  const handleDelete = () => {
    if (setter) {
      props.handleRemove(setter);
      props.handleState();
      console.log(setter);
    }
    setsetter("");
  };

  return (
    <div style={{display : "flex" , flexDirection : "row"}}>
      <Input
        list="remover"
        w={["0px", "50vw", "50vw"]}
        type="text"
        borderWidth="thin"
        mt="5"
        px="1em"
        py="1.25em"
        placeholder="Remove Courses"
        borderColor={box}
        errorBorderColor="crimson"
        focusBorderColor={focus}
        onChange={(e) => setsetter(e.target.value)}
        value={setter}
        variant="outline"
        display={{
          xs : "none",
          sm : "none",
          md : "block",
          lg : "none"
    
        }}
      />
      <datalist id="remover">
        {Course.map((item, index) => {
          return (
            <option value={item.Name} key={index}>
              {item.Code}
            </option>
          );
        })}
      </datalist>
      <Button
        onClick={handleDelete}
        ml={["20px", "30px", "40px"]}
        color={props.textColor}
        mt="5"
        backgroundColor={props.color}
        _hover={{ background: props.color }}
        _focus={{ _focus: "none" }}
        display={{
          sm : "none",
          md : "block",
          lg : "none"
    
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default RemoveItem;
