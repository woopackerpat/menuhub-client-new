import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/system";

function AuthLayout() {
   return (
      <div>
         <div>
            <Navbar />
            <Container maxWidth="xxl" sx={{ mt: "20px" }}>
               <Box
                  sx={{
                     px: {
                        xs: "0",
                        xl: "50px",
                        lg: "30px",
                        md: "30px",
                        sm: "10px",
                     },
                  }}
               >
                  <Outlet />
               </Box>
            </Container>
         </div>
      </div>
   );
}
export default AuthLayout;
