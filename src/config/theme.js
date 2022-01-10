import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ef6c00",
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
