import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RegisterForm from "./RegisterForm";
import RegisterButton from "./RegisterButton";
import LoginGoogle from "./LoginGoogle";

function Register({ handleCloseRegister, openRegister }) {
  return (
    <>
      <Dialog
        open={openRegister}
        onClose={handleCloseRegister}
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
          <IconButton aria-label="close" onClick={handleCloseRegister}>
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
              width="50px"
              src="https://cdn.logojoy.com/wp-content/uploads/2018/08/15101933/2.png"
              alt=""
            />
          </Box>
          <DialogTitle variant="h3">Welcome to Menuhub</DialogTitle>
          <DialogContent
            sx={{
              px: 10,
            }}
          >
            <RegisterForm />
           
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
              <LoginGoogle />
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
              <Box>
                <b>Not on Pinterest yet? Sign up</b>
              </Box>
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

export default Register;
