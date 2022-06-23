import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import GoogleLogo from "./GoogleLogo";

function LoginGoogle() {
  return (
    <Button variant="contained" fullWidth size="large" color="light">
      <Grid
        container
        spacing={0}
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center">
            <GoogleLogo />
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
  );
}

export default LoginGoogle;