import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordEditForm() {
   const [password, setPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmNewPassword, setConfirmNewPassword] = useState("");

   //    const navigate = useNavigate();

   const handlePassword = () => {};
   const handleNewPassword = () => {};
   const handleConfirmNewPassword = () => {};
   return (
      <>
         <Box component="form" autoComplete="off">
            <TextField
               autoFocus
               margin="normal"
               id="password"
               label="Password"
               type="email"
               fullWidth
               value={password}
               onChange={handlePassword}
               required
               //    error={error.password ? true : false}
               //    helperText={error.password}
            />
            <TextField
               autoFocus
               margin="normal"
               id="newPassword"
               label="New password"
               type="password"
               fullWidth
               value={newPassword}
               onChange={handleNewPassword}
               required
               //    error={error.newPassword ? true : false}
               //    helperText={error.newPassword}
            />
            <TextField
               autoFocus
               margin="normal"
               id="confirmNewPassword"
               label="Confirm new password"
               type="password"
               fullWidth
               value={confirmNewPassword}
               onChange={handleConfirmNewPassword}
               required
               //    error={error.confirmNewPassword ? true : false}
               //    helperText={error.confirmNewPassword}
            />
         </Box>
         <Button variant="contained" fullWidth sx={{ mt: 5 }}>
            EDIT
         </Button>
      </>
   );
}

export default PasswordEditForm;
