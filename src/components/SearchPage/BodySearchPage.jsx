import { Box, CssBaseline } from "@mui/material";
import HeaderSearchPage from "./HeaderSearch";
import MainContentSearchPage from "./MainContentSearchPage";

function BodySearchPage() {
   return (
      <>
         <CssBaseline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               <HeaderSearchPage />
               <MainContentSearchPage />
            </Box>
         </CssBaseline>
      </>
   );
}
export default BodySearchPage;
