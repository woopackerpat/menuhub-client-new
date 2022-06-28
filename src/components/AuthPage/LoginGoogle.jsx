import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import axios from "../../config/axios";
import { setAccessToken } from "../../services/localStorage";
import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

function LoginGoogle({ handleClose }) {
   const { fetchMe } = useAuth();
   const buttonWidth = useRef();

   const handleFetchLogin = () => {
      fetchMe();
      handleClose();
   };

   const handleCallbackResponse = async (res) => {
      try {
         const obj = { googleData: res.credential };
         const login = await axios.post("/auth/google", obj);
         console.log(login.data);
         const token = login.data.token;
         setAccessToken(token);
         handleFetchLogin();
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
         client_id:
            "321447756040-07qa55lknl2mcuqr606akdl39ihl64s4.apps.googleusercontent.com",
         callback: handleCallbackResponse,
         prompt_parent_id: "g_id_onload",
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
         size: "large",
         width: buttonWidth.current.clientWidth,
         text: "continue_with",
         border: "none",
      });
      google.accounts.id.prompt();
   }, []);

   return (
      <>
         <Button
            id="signInDiv"
            ref={buttonWidth}
            fullWidth
            size="large"
            color="light"
            sx={{ border: "1px silver solid" }}
         ></Button>
      </>
   );
}

export default LoginGoogle;
