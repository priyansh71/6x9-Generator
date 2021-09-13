/** @format */

import React, { useState, useEffect } from "react";
import { Select, useColorModeValue } from "@chakra-ui/react";
import Course from "../static/Course";

const AddItem = (props) => {
  const [value, setValue] = useState("");
  const box = useColorModeValue("gray.500", "gray.100");

  const handler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value) props.handleTable(value);
  }, [value, props]);

  return (
    <div>
      <Select
        placeholder="Select Course"
        size="md"
        w="md"
        borderWidth="1"
        mt="6"
        borderColor={box}
        _focus={{ focus: "none" }}
        onChange={handler}
        value={value}
      >
        {Course.map((item, index) => {
          return (
            <option value={item.ID} key={index}>
              {item.Code} - {item.Name}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default AddItem;
