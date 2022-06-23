import { Box, Link, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const [error, setError] = useState({})
    const [apiError, setApiError ] = useState('')

    const navigate = useNavigate()
    
    const {register} = useAuth()
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
