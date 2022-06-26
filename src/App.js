import "./App.css";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material";

import { QueryClient, QueryClientProvider } from "react-query";
import InfiniteScrollProvider from "./contexts/InfiniteScrollContext";

const queryClient = new QueryClient();

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
         blue: {
            main: "#1976d2",
            dark: "#1565c0",
            contrastText: "#fff",
         },
      },
      shape: {
         borderRadius: 16,
      },
   });
   return (
      <ThemeProvider theme={theme}>
         <QueryClientProvider client={queryClient}>
            <InfiniteScrollProvider>
               <Router />
            </InfiniteScrollProvider>
         </QueryClientProvider>
      </ThemeProvider>
   );
}

export default App;
