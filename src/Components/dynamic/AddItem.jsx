/** @format */

import React, { useState } from "react";
import { Input, useColorModeValue, Button } from "@chakra-ui/react";
import Course from "../static/Course";

const AddItem = (props) => {
  const [value, setValue] = useState("");
  const box = useColorModeValue("gray.400", "gray.200");
  const focus = useColorModeValue("gray.500", "gray.100");

  const handler = () => {
    if (value) {
      props.handleTable(value);
      props.handleState();
    }
    setValue("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handler();
    }
  };

  return (
    <div>
      <Input
        list="courses"
        id="selector"
        w={["50vw", "45vw", "40vw"]}
        type="text"
        borderWidth="thin"
        listStyleImg="revert"
        mt="3"
        p="1em"
        placeholder="Search Courses"
        borderColor={box}
        errorBorderColor="crimson"
        focusBorderColor={focus}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        _placeholder={{color : focus}}
        variant="outline"
        onKeyPress={handleKey}
        display ={{
          xs : "none",
          sm : "none",
          md : "inline-block",
          lg : "inline-block"
        }}
      />
      <datalist id="courses" >
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
        onClick={handler}
        ml={["20px", "30px", "40px"]}
        color={props.textColor}
        backgroundColor={props.color}
        _hover={{ background: props.color }}
        _focus={{ _focus: "none" }}
        display ={{
          xs : "none",
          sm : "none",
          md : "inline-block",
          lg : "inline-block"
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddItem;
