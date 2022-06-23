import { Container, CssBaseline, Typography } from "@mui/material";
import BodyHome from "./BodyHome";

function ContainerHome() {
   return (
      <>
         <CssBaseline>
            <Container maxWidth="lg">
               <Typography variant="h5" gutterBottom sx={{ mt: "20px" }}>
                  Suggestion for you
               </Typography>
               <BodyHome />
            </Container>
         </CssBaseline>
      </>
   );
}

export default ContainerHome;
