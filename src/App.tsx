import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Button from "./components/Button";
import { useDarkMode } from "./components/hooks";
import ThemeButtonContainer from "./components/ThemeButtonContainer";
import { darkTheme, lightTheme } from "./components/Themes";
import Home from "./pages/Home/Home";

import "./App.css";
function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <ThemeButtonContainer>
        <Button variant="filled" onPress={themeToggler}>
          Change theme
        </Button>
      </ThemeButtonContainer>
      <Routes>
        <Route path="/Sandbox-project" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
