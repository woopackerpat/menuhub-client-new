import { Box } from "@mui/material";
import EditProfile from "./EditProfile";

function ContainerEditProfile() {
   return (
      <Box
         sx={{
            maxWidth: "400px",
            mx: "auto",
         }}
      >
         <EditProfile />
      </Box>
   );
}

export default ContainerEditProfile;
