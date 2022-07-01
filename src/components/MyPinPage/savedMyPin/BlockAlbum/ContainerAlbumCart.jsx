import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ContainerAlbumCart({ name, id, Restaurants }) {
   console.log("containerAlbumCart    ", Restaurants);
   const navigate = useNavigate();

   const getImage = Restaurants.map((el) =>
      el.Menus.map((item) => item.imageUrl)
   );
   console.log("getImage     ", getImage);
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
            >
               <img
                  src={getImage ? getImage[0] : ""}
                  alt=""
                  style={{
                     objectFit: "cover",
                     width: "100%",
                  }}
               />
            </Box>
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
               >
                  <img
                     src={getImage ? getImage[1] : ""}
                     alt=""
                     style={{
                        objectFit: "cover",
                        width: "100%",
                     }}
                  />
               </Box>
               <Box
                  sx={{
                     backgroundColor: "#efefef",
                     width: "90px",
                     height: "50%",
                  }}
               >
                  <img
                     src={getImage ? getImage[2] : ""}
                     alt=""
                     style={{
                        objectFit: "cover",
                        width: "100%",
                     }}
                  />
               </Box>
            </Box>
         </Container>
         <Typography variant="h6" fontWeight="bold">
            {name}
         </Typography>
      </Box>
   );
}
export default ContainerAlbumCart;
