import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material";


function App() {
  const theme = createTheme({
    palette: {
      common: {
        dark: "#000000",
        light: "#ffffff"
      },
      primary: {
        main: "#121212",
      },
      secondary: {
        main: "#767676",
      },
      error: {
        main: "#e60023"
      }
    },
  
  });
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
