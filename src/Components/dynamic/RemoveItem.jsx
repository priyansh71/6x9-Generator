/** @format */

import React, { useState } from "react";
import { Input, useColorModeValue, Button } from "@chakra-ui/react";
import Course from "../static/Course";

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

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleDelete();
    }
  };

  return (
    <div style={{display : "flex" , flexDirection : "row"}}>
      <Input
        list="remover"
        w={["50vw", "45vw", "40vw"]}
        type="text"
        borderWidth="thin"
        mt="5"
        p="1em"
        placeholder="Remove Courses"
        borderColor={box}
        errorBorderColor="crimson"
        focusBorderColor={focus}
        onChange={(e) => setsetter(e.target.value)}
        _placeholder={{ color: focus}}
        value={setter}
        variant="outline"
        display={{
          xs : "none",
          sm : "none",
          md : "block",
          lg : "none"
        }}
        onKeyPress={handleKey}
      />
      <datalist id="remover">
      {Course.map((item, index) => {
          return item.Section ? (
            <option value={item.Name} key={index} >
              {item.Code} {item.Type} : {item.Section}
            </option>
          ) : (
            <option value={item.Name} key={index} >
              {item.Code} {item.Type}
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
