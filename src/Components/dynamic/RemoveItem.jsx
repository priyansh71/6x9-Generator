import React , {useState} from 'react';
import { Select, useColorModeValue } from '@chakra-ui/react';

const RemoveItem = () => {
    const [value, setValue] = useState("");
    const box = useColorModeValue("gray.500", "gray.100");
    return (
        <div>
            <Select
             placeholder="Remove Course"
             size="md"
             w="md"
             borderWidth="1"
             mt="6"
             borderColor={box}
             _focus={{ focus: "none" }}
             value={value}
             onChange={(e) => setValue(e.target.value)}
             >
                 <option></option>
                 </Select>
            
        </div>
    )
}

export default RemoveItem;