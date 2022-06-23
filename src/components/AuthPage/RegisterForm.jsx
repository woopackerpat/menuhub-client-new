import { Box, Link, TextField, Typography } from "@mui/material";
import React from "react";

function RegisterForm() {
  return (
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
        label="Create a password"
        type="password"
        fullWidth
      />

      <TextField
        autoFocus
        margin="normal"
        id="age"
        label="Age"
        type="text"
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
  );
}

export default RegisterForm;
