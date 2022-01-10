import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#E33E7F",
  //   //   main: "#fff",
  //   },
  // },
  typography: {
    fontFamily: "Poppins",
    button: { 
      textTransform: "none"
    }
  }
});

export default theme;
