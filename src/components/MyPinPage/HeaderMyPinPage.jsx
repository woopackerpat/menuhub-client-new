import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderMyPinPage() {
   const navigate = useNavigate();
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
               src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1095550.jpg&fm=jpg"
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
               @isasrestaurant
            </Typography>
            <Typography variant="h4" fontWeight="bold">
               ISAS restaurant
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
