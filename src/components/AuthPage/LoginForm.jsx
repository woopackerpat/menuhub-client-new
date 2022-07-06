import { Box, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { useAuth } from "../../contexts/AuthContextProvider";
import { validateLogin } from "../../services/validate";
import { useEffect } from "react";

function LoginForm({ handleClose }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { login } = useAuth();

   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   const handlePassword = (e) => {
      setPassword(e.target.value);
   };

   const [error, setError] = useState({});
   const [apiError, setApiError] = useState("");

   const handleSubmitLogin = async (e) => {
      e.preventDefault();
      const errResult = validateLogin({
         email,
         password,
      });

      setError(errResult);

      if (Object.keys(errResult).length === 0) {
         try {
            await login(email, password);
            setError({});
            setEmail("");
            setPassword("");
            handleClose();
         } catch (err) {
            // console.log(err.response.status)
            setApiError('Your email or password is incorrect')
            // setApiError(err.response.data.message);
         }
      }
   };

   useEffect(() => {

   }, [error])

   return (
      <>
         <Box component="form" onSubmit={handleSubmitLogin} autoComplete="off">
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
               label="Password"
               type="password"
               fullWidth
               onChange={handlePassword}
               value={password}
               required
               error={error.email ? true : apiError ? true : false}
               helperText={error.password || apiError}
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
            <LoginButton />
         </Box>
      </>
   );
}

export default LoginForm;
