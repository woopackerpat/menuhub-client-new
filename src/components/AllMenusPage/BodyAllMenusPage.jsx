import { Box, CssBaseline } from "@mui/material";
import HeaderAllMenusPage from "./HeaderAllMenusPage";
import MainContentAllMenusPage from "./MainContentAllMenusPage";

function BodyAllMenusPage() {
   return (
      <>
         <CssBaseline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               <HeaderAllMenusPage />
               <MainContentAllMenusPage />
            </Box>
         </CssBaseline>
      </>
   );
}

export default BodyAllMenusPage;
