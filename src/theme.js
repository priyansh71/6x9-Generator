import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  xs : "0px",
  sm: "470px",
  md: "650px",
  lg: "1200px"
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