import { Button, IconButton, styled, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";

function CartItems({ post }) {
   const { download_url, author } = post;
   const [show, setShow] = useState(false);

   const handleMouseOver = () => {
      setShow(true);
   };

   const handleMouseOut = () => {
      setShow(false);
   };

   const handleCreateAlbum = (e) => {
      e.stopPropagation();
   };

   return (
      <Box
         sx={{ position: "relative" }}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
      >
         <Box sx={{ "&:hover": { filter: "grayscale(60%)" } }}>
            <img
               src={download_url}
               alt="img"
               loading="lazy"
               style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "16px",
                  cursor: "zoom-in",
               }}
            />
         </Box>
         {show && (
            <>
               <Box
                  sx={{
                     position: "absolute",
                     top: 6,
                     left: 12,
                  }}
               >
                  <DropdownProfile />
               </Box>
               <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                  <Button
                     variant="contained"
                     onClick={() => handleCreateAlbum}
                     color="error"
                  >
                     Save
                  </Button>
               </Box>
               <Box
                  sx={{
                     position: "absolute",
                     bottom: 40,
                     right: 12,
                     display: "flex",
                     gap: 1,
                  }}
               >
                  <DropdownShare />
                  <IconButton
                     sx={{
                        backgroundColor: "#f0f0f0",
                        opacity: [0.9, 0.8, 0.7],
                        "&:hover": { backgroundColor: "white", opacity: 1 },
                     }}
                  >
                     <MoreHorizIcon color="dark" />
                  </IconButton>
               </Box>
            </>
         )}
         <Typography fontWeight="bold">{author}</Typography>
      </Box>
   );
}

export default CartItems;
