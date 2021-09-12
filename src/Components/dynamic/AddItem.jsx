/** @format */

import React, { useState } from "react";
import { Select, useColorModeValue, Button } from "@chakra-ui/react";
import Course from "../static/Course";

const AddItem = (props) => {
  const [value, setValue] = useState("");
  const box = useColorModeValue("gray.500", "gray.100");
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
        onChange={(e) => setValue(e.target.value)}
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
      <Button
        display="none"
        type="submit"
        onClick={value ? props.handleTable(value) : null}
      />
    </div>
  );
};

export default AddItem;
