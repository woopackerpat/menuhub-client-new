import { Box, CssBaseline } from "@mui/material";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import HeaderSearchPage from "./HeaderSearch";
import MainContentSearchPage from "./MainContentSearchPage";
import { useLocation } from "react-router-dom";

function BodySearchPage() {

   const [resArr, setResArr] = useState([])
   const [page, setPage] = useState()
   const [refId, setRefId] = useState()

   const location = useLocation()
   
   useEffect(() => {
      const fetchData = async () => {
         try {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('search')
            const res = await axios.post('restaurant/search', { search: query })
            console.log(res.data)
            setResArr(res.data)
         } catch {
            console.log('fetchData error')
         }
      }
      fetchData()
   }, [location])

   useEffect(() => {
      if (resArr.length != 0) {
         setPage(resArr)
         setRefId(resArr[0].id)
      }
   }, [resArr, location])

   useEffect(() => {
   }, [location])

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
