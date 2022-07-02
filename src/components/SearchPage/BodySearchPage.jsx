import { Box, CssBaseline } from "@mui/material";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import HeaderSearchPage from "./HeaderSearch";
import MainContentSearchPage from "./MainContentSearchPage";
import { useSearch } from "../../contexts/SearchContextProvider";

function BodySearchPage() {

   const { fetchData, parseData, data, page, refId, search , location} = useSearch()

   const intialize = async () => {
      try {
         fetchData()
      } catch {

      }
   }

   const parse = async () => {
      try {
         parseData()
      } catch {

      }
   }

   useEffect(() => {
      intialize()
   }, [location])

   useEffect(() => {
         parse()
   }, [data])

   return (
      <>
         <CssBaseline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               {refId ? (<HeaderSearchPage refId={`${refId}`} />) : (<div></div>)}

               {/* <MainContentSearchPage /> */}
            </Box>
         </CssBaseline>
      </>
   );
}
export default BodySearchPage;
