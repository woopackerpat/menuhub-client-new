import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ContainerAlbumCart({ name, id }) {
   const navigate = useNavigate();
   return (
      <Box
         sx={{ display: "flex", flexDirection: "column" }}
         onClick={() => navigate(`/myPin/${id}`)}
      >
         <Container sx={{ display: "flex", width: "270px", gap: "3px" }}>
            <Box
               sx={{
                  width: "180px",
                  height: "180px",
                  backgroundColor: "#efefef",
               }}
            ></Box>
            <Box
               sx={{
                  width: "90px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
               }}
            >
               <Box
                  sx={{
                     backgroundColor: "#efefef",
                     width: "90px",
                     height: "50%",
                     border: "10px",
                  }}
               ></Box>
               <Box
                  sx={{
                     backgroundColor: "#efefef",
                     width: "90px",
                     height: "50%",
                  }}
               ></Box>
            </Box>
         </Container>
         <Typography variant="h6" fontWeight="bold">
            {name}
         </Typography>
      </Box>
   );
}
export default ContainerAlbumCart;
