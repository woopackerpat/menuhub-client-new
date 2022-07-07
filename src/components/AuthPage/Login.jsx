import {
   Button,
   Dialog,
   DialogContent,
   DialogTitle,
   IconButton,
   Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./LoginForm";

import LoginGoogle from "./LoginGoogle";
import Register from "./Register";
import { useState } from "react";

import logo from "../../assets/images/logo.png";

function Login({ handleClose, variant, color, sx, title }) {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Button
            variant={variant}
            color={color}
            sx={{
               ...sx,
               textTransform: "Capitalize",
               lineHeight: "35px",
               borderRadius: "24px",
            }}
            component="button"
            onClick={() => setOpen((p) => !p)}
            disableElevation
         >
            <b>{title}</b>
         </Button>
         <Dialog
            open={open}
            onClose={() => setOpen((p) => !p)}
            maxWidth="md"
            sx={{
               textAlign: "center",
            }}
         >
            <Box
               display="flex"
               justifyContent="right"
               sx={{
                  mr: "10px",
                  mt: "10px",
               }}
            >
               <IconButton
                  aria-label="close"
                  onClick={() => setOpen((p) => !p)}
               >
                  <CloseIcon />
               </IconButton>
            </Box>
            <Box
               sx={{
                  mx: 10,
                  borderRadius: "24px",
               }}
            >
               <Box
                  sx={{
                     mt: "60px",
                  }}
               >
                  <img
                     style={{ width: 66, height: 60 }}
                     src={logo}
                     alt="logo"
                  />
               </Box>
               <DialogTitle variant="h3">Welcome to Menuhub</DialogTitle>
               <DialogContent
                  sx={{
                     px: 10,
                  }}
               >
                  <LoginForm handleClose={handleClose} />

                  <Box
                     sx={{
                        my: "10px",
                     }}
                  >
                     <Typography
                        sx={{
                           mx: 0,
                           px: 0,
                           fontWeight: "bold",
                        }}
                     >
                        OR
                     </Typography>
                  </Box>
                  <Box>
                     <Box display="flex" flexDirection="column">
                        <LoginGoogle handleClose={handleClose} />
                     </Box>
                     <Box sx={{ mt: "30px" }}>
                        By continuing, you agree to Menuhub's
                     </Box>
                     <Box>
                        <b>Terms of Service</b> and acknowledge you've read our
                     </Box>
                     <Box>
                        <b>Privacy Policy</b>
                     </Box>
                     <hr style={{ width: "60%", marginTop: "25px" }} />
                     <Register title="Not on Pinterest yet? Sign up" />
                     <Box sx={{ mb: "20px" }}>
                        <b>Are you a business? Get started here!</b>
                     </Box>
                  </Box>
               </DialogContent>
            </Box>
         </Dialog>
      </>
   );
}

export default Login;
