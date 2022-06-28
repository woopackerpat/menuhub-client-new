import {
   Avatar,
   Box,
   Button,
   styled,
   TextField,
   Typography,
} from "@mui/material";
import { useState } from "react";
import EditPassword from "./EditPassword";

function EditProfile() {
   // Modal for Password Edit
   const [openPassword, setOpenPassword] = useState(false);

   const handleClickOpen = () => {
      setOpenPassword(true);
   };

   const handleClosePass = () => {
      setOpenPassword(false);
   };
   // ************************************

   const Inputs = styled("input")({
      display: "none",
   });

   return (
      <>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: 6,
               alignItems: "center",
            }}
         >
            <Box>
               <Typography variant="h2" fontWeight="bold">
                  Public Profile
               </Typography>
               <Typography color="#767676">
                  People visiting your profile will see the following info
               </Typography>
            </Box>
            <Box>
               <Typography color="#767676">Photo</Typography>
               <Box sx={{ display: "flex", gap: 2 }}>
                  <Avatar />
                  <Button variant="contained" color="error">
                     <label htmlFor={`icon-button-file`}>
                        <Inputs
                           accept="image/*"
                           id={`icon-button-file`}
                           type="file"
                        />
                        Change
                     </label>
                  </Button>
               </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
               <TextField label="First Name" />
               <TextField label="Last Name" />
            </Box>
            <TextField label="Email" fullWidth />
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
               Edit password
            </Button>
            <Box sx={{ display: "flex", gap: 2 }}>
               <Button variant="contained" color="cleanLight">
                  Resent
               </Button>
               <Button variant="contained" color="error">
                  Save
               </Button>
            </Box>
         </Box>
         <EditPassword handleClosePass={handleClosePass} open={openPassword} />
      </>
   );
}

export default EditProfile;
