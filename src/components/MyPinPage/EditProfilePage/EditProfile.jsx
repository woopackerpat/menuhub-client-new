import {
   Avatar,
   Box,
   Button,
   styled,
   TextField,
   Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import ProfileAvatar from "../../common/ProfileAvatar";
import EditPassword from "./EditPassword";


function EditProfile() {
   const { user, EditUser } = useAuth();
   const { firstName, lastName, email, profilePicUrl } = user;

   const [nameEdit, setNameEdit] = useState(firstName || "");
   const [nameLastEdit, setNameLastEdit] = useState(lastName || "");
   const [profilePicEdit, setProfilePicEdit] = useState(null);

   // Modal for Password Edit
   const [openPassword, setOpenPassword] = useState(false);

   const handleClickOpen = () => {
      setOpenPassword(true);
   };

   const handleClosePass = () => {
      setOpenPassword(false);
   };
   // ************************************

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await EditUser(nameEdit, nameLastEdit, profilePicEdit);
      } catch (err) {
         console.log(err);
      }
   };

   const handleClearEdit = () => {
      setNameEdit(firstName);
      setNameLastEdit(lastName);
   };

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
               <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {profilePicEdit ? (
                     <Avatar
                        sx={{ width: "150px", height: "150px" }}
                        src={
                           profilePicEdit
                              ? URL.createObjectURL(profilePicEdit)
                              : profilePicUrl
                        }
                     />
                  ) : (
                     <ProfileAvatar width="150px" height="150px" fontSize="100px" />
                  )}
                  <Box>
                     <Button variant="contained" color="error">
                        <label htmlFor={`icon-button-file`}>
                           <Inputs
                              accept="image/*"
                              id={`icon-button-file`}
                              type="file"
                              onChange={(e) =>
                                 setProfilePicEdit(e.target.files[0])
                              }
                           />
                           Change
                        </label>
                     </Button>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
               <TextField
                  label="First Name"
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
               />
               <TextField
                  label="Last Name"
                  value={nameLastEdit}
                  onChange={(e) => setNameLastEdit(e.target.value)}
               />
            </Box>
            <TextField disabled fullWidth value={email} />
            {/* <Button
               variant="contained"
               fullWidth
               onClick={() => handleClickOpen}
            >
               Edit password
            </Button> */}
            <Box sx={{ display: "flex", gap: 2 }}>
               <Button
                  variant="contained"
                  color="cleanLight"
                  onClick={handleClearEdit}
               >
                  Resent
               </Button>
               <Button
                  variant="contained"
                  color="error"
                  onClick={handleSubmitEdit}
               >
                  Save
               </Button>
            </Box>
         </Box>

         {/* <EditPassword handleClosePass={handleClosePass} open={openPassword} /> */}
      </>
   );
}

export default EditProfile;
