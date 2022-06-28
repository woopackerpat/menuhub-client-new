import { Box, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import RegisterButton from "./RegisterButton";
import { validateRegister } from "../../services/validate";

function RegisterForm({ setType, handleCloseRegister }) {
   const { register } = useAuth();
   const navigate = useNavigate();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const [error, setError] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const [apiError, setApiError] = useState("");

   const handleFirstName = (e) => {
      setFirstName(e.target.value);
   };

   const handleLastName = (e) => {
      setLastName(e.target.value);
   };

   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   const handlePassword = (e) => {
      setPassword(e.target.value);
   };
   const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
   };

   const handleSubmitForm = async (e) => {
      e.preventDefault();

      const errResult = validateRegister({
         firstName,
         lastName,
         email,
         password,
         confirmPassword,
      });

      setError(errResult);

      if (Object.keys(errResult).length === 0) {
         try {
            const res = await register({
               firstName,
               lastName,
               email,
               password,
               confirmPassword,
            });
            handleCloseRegister();
         } catch (err) {
            console.log(err);
            setApiError(err.response.data.message);
         }
      }
   };
   return (
      <>
         <Box component="form" onSubmit={handleSubmitForm} autoComplete="off">
            <Box
               sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}
            >
               <TextField
                  autoFocus
                  fullWidth
                  margin="normal"
                  id="firstName"
                  label="First Name"
                  type="text"
                  required
                  value={firstName}
                  onChange={handleFirstName}
               />
               <TextField
                  autoFocus
                  fullWidth
                  margin="normal"
                  id="lastName"
                  label="Last Name"
                  type="text"
                  required
                  value={lastName}
                  onChange={handleLastName}
               />
            </Box>
            <TextField
               autoFocus
               margin="normal"
               id="email"
               label="Email Address"
               type="email"
               fullWidth
               onChange={handleEmail}
               value={email}
               required
               error={error.email ? true : false}
               helperText={error.email}
            />
            <TextField
               autoFocus
               margin="normal"
               id="password"
               label="Create a password"
               type="password"
               fullWidth
               onChange={handlePassword}
               value={password}
               required
               error={error.email ? true : false}
               helperText={error.password}
            />

            <TextField
               autoFocus
               margin="normal"
               id="confirmPassword"
               label="Confirm Password"
               type="password"
               fullWidth
               onChange={handleConfirmPassword}
               value={confirmPassword}
               required
               error={error.email ? true : false}
               helperText={error.confirmPassword}
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
            <RegisterButton />
         </Box>
      </>
   );
}

export default RegisterForm;
