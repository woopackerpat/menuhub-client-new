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
import { useSuccess } from "../../../contexts/SuccessContextProvider";
import ToastMessage from "../../common/ToastMessage";

function EditProfile() {
   const { success, setSuccess } = useSuccess();
   const { user, EditUser } = useAuth();
   const { firstName, lastName, email, profilePicUrl } = user;
   const [openToast, setOpenToast] = useState(false);

   const [nameEdit, setNameEdit] = useState(firstName || "");
   const [nameLastEdit, setNameLastEdit] = useState(lastName || "");
   const [profilePicEdit, setProfilePicEdit] = useState(null);

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         const res = await EditUser(nameEdit, nameLastEdit, profilePicEdit);
         setSuccess(res.data.message);
         setOpenToast(true);
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
                  <Avatar
                     sx={{ width: "150px", height: "150px" }}
                     src={
                        profilePicEdit
                           ? URL.createObjectURL(profilePicEdit)
                           : profilePicUrl
                     }
                  />
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
            {success && <ToastMessage openToast={openToast} text={success} />}
         </Box>
      </>
   );
}

export default EditProfile;
