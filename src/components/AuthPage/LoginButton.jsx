import { Box, Button, Typography } from "@mui/material";
import React from "react";

function LoginButton() {
  return (
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
  );
}

export default LoginButton;
