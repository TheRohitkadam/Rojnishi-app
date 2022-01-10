import { ThemeProvider } from "@mui/material/styles";
import Appbar from "./Components/Appbar";
import Login from "./Components/Login";
import theme from "./config/theme";
import './styles/App.css'

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
