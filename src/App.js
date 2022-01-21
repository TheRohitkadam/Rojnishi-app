import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./Components";
import { Login } from "./Components";
import Home from "./Screens/Home"
import theme from "./config/theme";
import "./styles/App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
//
