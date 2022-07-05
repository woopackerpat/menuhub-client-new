import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

function HeaderMyPinPage() {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { user } = useAuth();
   const { firstName, lastName, profilePicUrl } = user;
   return (
      <>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               gap: 3,
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
                     fontSize: "16px",
                     fontWeight: "bold",
                     textTransform: "none",
                     borderRadius: "24px",
                  }}
                  disableElevation
                  size="large"
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
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration:
                           pathname === "/myPin/created-pin" ? "underline" : "",
                        textDecorationThickness: "3px",
                        textUnderlineOffset: "5px",
                        "&:hover": {
                           backgroundColor:
                              pathname === "/myPin/created-pin"
                                 ? "#fff"
                                 : "#efefef",
                           textDecoration:
                              pathname === "/myPin/created-pin"
                                 ? "underline"
                                 : "",
                           textDecorationThickness: "3px",
                           textUnderlineOffset: "5px",
                        },
                     }}
                     onClick={() => navigate("created-pin")}
                  >
                     Created
                  </Button>
                  <Button
                     variant="text"
                     sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration:
                           pathname === "/myPin" ? "underline" : "",
                        textDecorationThickness: "3px",
                        textUnderlineOffset: "5px",
                        "&:hover": {
                           backgroundColor:
                              pathname === "/myPin" ? "#fff" : "#efefef",
                           textDecoration:
                              pathname === "/myPin" ? "underline" : "",
                           textDecorationThickness: "3px",
                           textUnderlineOffset: "5px",
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
