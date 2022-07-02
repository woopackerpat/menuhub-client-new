import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import PinContextProvider from "./contexts/PinContextProvider";
import RestaurantContextProvider from "./contexts/RestaurantContextProvider";
import SearchContextProvider from "./contexts/SearchContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <React.StrictMode>
   <BrowserRouter>
      <AuthContextProvider>
         <PinContextProvider>
            <RestaurantContextProvider>
               <SearchContextProvider>
                  <App />
               </SearchContextProvider>
            </RestaurantContextProvider>
         </PinContextProvider>
      </AuthContextProvider>
   </BrowserRouter>
   // </React.StrictMode>
);
