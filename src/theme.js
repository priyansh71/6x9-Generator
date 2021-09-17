import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  xs : "0px",
  sm: "500px",
  md: "700px",
  lg: "1050px"
})


const theme = extendTheme({ 
    breakpoints,
    styles : {
        global : {
            body : {
                fontFamily : "Nunito",
            }
        }
    }
})

export default theme;