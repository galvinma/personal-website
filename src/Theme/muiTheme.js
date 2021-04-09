import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import '.././App.scss'
import variables from '.././Variables.scss'
require("typeface-montserrat")
require("typeface-open-sans")

const breakpoints = createBreakpoints({})
// Each breakpoint (a key) matches with a fixed screen width (a value):
//
//     xs, extra-small: 0px
//     sm, small: 600px
//     md, medium: 960px
//     lg, large: 1280px
//     xl, extra-large: 1920px


const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${variables.primaryColor}`,
    },
    secondary: {
      main: `${variables.secondaryColor}`,
    }
  },
  typography: {
    // h1: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`,
    // },
    // h2: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`,
    //
    // },
    // h3: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`,
    // },
    // h4: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`
    // },
    // h5: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`,
    // },
    // h6: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`
    // },
    // body1: {
    //   fontFamily: "Open Sans, sans-serif",
    //   color: `${variables.primaryBlack}`,
    // },
    // body2: {
    //   fontFamily: "Open Sans, sans-serif",
    //   color: `${variables.primaryBlack}`,
    // },
    // subtitle1: {
    //   fontFamily: "Montserrat, serif;",
    //   color: `${variables.primaryBlack}`
    // },
    // subtitle2: {
    //   fontFamily: "open Sans, sans-serif;",
    //   color: `${variables.primaryBlack}`
    // },
    // button: {
    //   fontFamily: "Montserrat, serif",
    //   color: `${variables.primaryBlack}`
    // }
  },
  overrides: {
    MuiListItemIcon:
    {
      root:
      {
        // minWidth: "42px",
        // color: "rgba(0, 0, 0, 1)"
      }
    },
    MuiListItemText:
    {
      root:
      {
        // marginTop: "0px",
        // marginBottom: "0px"
      }
    },
    MuiPaper:
    {
      root:
      {
        // backgroundColor: "#BCCDDA"
      }
    }
  }
})

export default theme;
