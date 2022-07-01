import { Box, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderAllMenusPage from "./HeaderAllMenusPage";
import MainContentAllMenusPage from "./MainContentAllMenusPage";

function BodyAllMenusPage() {
   const { restaurantId } = useParams();
   console.log(restaurantId);
   return (
      <>
         <CssBaseline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               <HeaderAllMenusPage />
               <MainContentAllMenusPage restaurantId={restaurantId} />
            </Box>
         </CssBaseline>
      </>
   );
}

export default BodyAllMenusPage;
