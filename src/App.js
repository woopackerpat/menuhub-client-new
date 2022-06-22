import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
   const theme = createTheme({
      palette: {
         dark: {
            main: "#000000",
         },
         light: {
            main: "#ffffff",
         },
         cleanLight: {
            main: "#efefef",
         },
         primary: {
            main: "#121212",
         },
         secondary: {
            main: "#767676",
         },
         error: {
            main: "#e60023",
         },
      },
      shape: {
         borderRadius: 16,
      },
   });
   return (
      <ThemeProvider theme={theme}>
         <Router />
      </ThemeProvider>
   );
}

export default App;
