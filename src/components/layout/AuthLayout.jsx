import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/system";
import MenusContextProvider from "../../contexts/MenusContextProvider";

function AuthLayout() {
  return (
    <div>
      <div>
        <Navbar />
        <MenusContextProvider>
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
        </MenusContextProvider>
      </div>
    </div>
  );
}
export default AuthLayout;
