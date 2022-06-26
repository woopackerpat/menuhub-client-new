import { Box, CssBaseline, ImageList, Typography } from "@mui/material";
import FooterDraft from "./FooterDraft";
import MainContentDraftMenu from "./MainContentDraftMenu";

function ContainerDraftMenuPage() {
   return (
      <>
         <CssBaseline>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
               }}
            >
               <Typography
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "bold" }}
               >
                  Create Your Own Menus
               </Typography>

               {/* ================= Input Category ===================== */}
               <MainContentDraftMenu />

               {/*=================== Draft Pic ========================= */}
               <FooterDraft />
            </Box>
         </CssBaseline>
      </>
   );
}

export default ContainerDraftMenuPage;
