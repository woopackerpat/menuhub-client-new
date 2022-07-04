import { Box, CssBaseline, Typography } from "@mui/material";
import BodyHome from "./BodyHome";

function ContainerHome() {
   return (
      <>
         <CssBaseline>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  // overflow: "auto",
               }}
            >
               <Typography variant="h5" gutterBottom>
                  Suggestion for you
               </Typography>
               <BodyHome />
            </Box>
         </CssBaseline>
      </>
   );
}

export default ContainerHome;
