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

function Login({ handleClose, open }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <IconButton aria-label="close" onClick={handleClose}>
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
            <Box>
              <TextField
                autoFocus
                margin="normal"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                autoFocus
                margin="normal"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              <Link href="#">
                <Typography
                  align="left"
                  variant="subtitle2"
                  sx={{ fontWeight: "bold" }}
                >
                  Forgot your password?
                </Typography>
              </Link>
            </Box>
            <Box sx={{ my: "10px" }}>
              <Button variant="contained" fullWidth size="large" color="error">
                <Typography
                  sx={{
                    py: "10px",
                    fontWeight: "normal",
                    textTransform: "none",
                  }}
                  variant="h5"
                >
                  Log in
                </Typography>
              </Button>
            </Box>
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
              <Button variant="contained" fullWidth size="large" color="blue">
                <Grid
                  container
                  spacing={0}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                      <Avatar />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        py: "10px",
                        fontWeight: "normal",
                        textTransform: "none",
                      }}
                      variant="h5"
                    >
                      Continue as Patcharapol
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                      <Avatar />
                    </Box>
                  </Grid>
                </Grid>
              </Button>
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

export default Login;
