import { Box, CssBaseline } from "@mui/material";
import { useLocation } from "react-router-dom";
import AlbumCreated from "./createdMyPin/AlbumCreated";
import HeaderMyPinPage from "./HeaderMyPinPage";
import AlbumSaved from "./savedMyPin/AlbumSaved";

function ContainerMyPinPage() {
   const { pathname } = useLocation();
   return (
      <div>
         <CssBaseline>
            <HeaderMyPinPage />
            {pathname === "/myPin" && (
               <Box sx={{ width: "270px" }}>
                  <AlbumSaved />
               </Box>
            )}
            {pathname === "/myPin/created-pin" && <AlbumCreated />}
         </CssBaseline>
      </div>
   );
}
export default ContainerMyPinPage;
