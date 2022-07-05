import { Box, IconButton } from "@mui/material";
import EditProfile from "./EditProfile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function ContainerEditProfile() {
   const navigate = useNavigate();

   return (
      <>
         <Box
            sx={{
               position: "relative",
               left: 400,
               top: 100,
               display: { xs: "none", xl: "block" },
            }}
         >
            <IconButton onClick={() => navigate("/myPin")}>
               <ArrowBackIcon color="dark" sx={{ fontSize: "48px" }} />
            </IconButton>
         </Box>
         <Box
            sx={{
               maxWidth: "400px",
               mx: "auto",
            }}
         >
            <EditProfile />
         </Box>
      </>
   );
}

export default ContainerEditProfile;
