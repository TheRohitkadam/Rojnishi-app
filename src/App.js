import { ThemeProvider } from "@mui/material/styles";
import Appbar from "./Components";
import { Login } from "./Components";
import theme from "./config/theme";
import "./styles/App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Appbar /> */}
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
