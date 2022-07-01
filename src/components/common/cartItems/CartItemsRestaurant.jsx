import { Button, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import { Scale } from "@mui/icons-material";

function CartItemsRestaurant({ Menus, items }) {
   const { name, id } = items;
   const ImageUrl = Menus.map((menu) => menu.imageUrl);
   const navigate = useNavigate();

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
         className="hvr-grow"
      >
         <Box
            // sx={{ "&:hover": { transfor }}
            onClick={() => navigate(`/allMenus/${id}`)}
         >
            <img
               src={ImageUrl}
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
                  {<DropdownProfile id={id} />}
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
         <Typography fontWeight="bold">{name}</Typography>
      </Box>
   );
}

export default CartItemsRestaurant;
