import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import logo from "../../../assets/images/logo.png";

function Navbar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="sticky" color="light">
            <Toolbar>
               <IconButton>
                  <img
                     style={{ width: 43, height: 37 }}
                     src={logo}
                     alt="logo"
                  />
               </IconButton>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
export default Navbar;
