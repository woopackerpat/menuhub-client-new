import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

function HeaderMyPinPage() {
   const navigate = useNavigate();
   const { user } = useAuth();
   const { firstName, lastName, email, profilePicUrl } = user;
   return (
      <>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               gap: 2,
            }}
         >
            <img
               src={profilePicUrl}
               alt="logo"
               style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
               }}
            />
            <Typography variant="body2" color="secondary">
               {`@${firstName}${lastName}`}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
               {`${firstName} ${lastName}`}
            </Typography>
            <Typography variant="body2">0 followers</Typography>
            <Box sx={{ display: "flex", gap: 4 }}>
               <Button
                  variant="contained"
                  color="cleanLight"
                  sx={{
                     "&:hover": {
                        backgroundColor: "#767676",
                        color: "white",
                        fontWeight: "bold",
                     },
                     fontWeight: "bold",
                  }}
               >
                  Share
               </Button>
               <Button
                  variant="contained"
                  color="cleanLight"
                  sx={{
                     "&:hover": {
                        backgroundColor: "#767676",
                        color: "white",
                        fontWeight: "bold",
                     },
                     fontWeight: "bold",
                  }}
                  onClick={() => navigate("/myPin/edit-profile")}
               >
                  Edit
               </Button>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  gap: 4,
               }}
            >
               <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                  <Button
                     variant="text"
                     sx={{
                        "&:focus": {
                           textDecoration: "underline",
                           fontWeight: "bold",
                        },
                     }}
                     onClick={() => navigate("created-pin")}
                  >
                     Created
                  </Button>
                  <Button
                     variant="text"
                     sx={{
                        "&:focus": {
                           textDecoration: "underline",
                           fontWeight: "bold",
                        },
                     }}
                     onClick={() => navigate("/myPin")}
                  >
                     Saved
                  </Button>
               </Box>
            </Box>
         </Box>
      </>
   );
}
export default HeaderMyPinPage;
