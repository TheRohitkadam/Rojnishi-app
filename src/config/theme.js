import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: "#fe725c",
    //   main: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    button: { 
      textTransform: "none"
    }
  }
});

export default theme;
