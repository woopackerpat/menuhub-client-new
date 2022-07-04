import { Backdrop, Box, CircularProgress, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderAllMenusPage from "./HeaderAllMenusPage";
import MainContentAllMenusPage from "./MainContentAllMenusPage";

function BodyAllMenusPage() {
   const [menus, setMenus] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const { restaurantId } = useParams();

   useEffect(() => {
      const fetchMenus = async () => {
         try {
            setIsLoading(true);
            if (restaurantId) {
               const res = await axios.get(
                  "/restaurant/menuall/" + restaurantId
               );
               console.log(res.data);
               setMenus(res.data.Menus);
            }
         } catch (err) {
            console.log(err);
         } finally {
            setIsLoading(false);
         }
      };
      fetchMenus();
   }, []);
   return (
      <>
         <Backdrop
            sx={{
               color: "#fff",
               zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isLoading}
         >
            <CircularProgress color="error" />
         </Backdrop>
         <CssBaseline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               <HeaderAllMenusPage restaurantId={restaurantId} menus={menus} />
               <MainContentAllMenusPage menus={menus} />
            </Box>
         </CssBaseline>
      </>
   );
}

export default BodyAllMenusPage;
