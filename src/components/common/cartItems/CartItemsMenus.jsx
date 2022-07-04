import { Button, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import DropdownReport from "./DropdownReport";

function CartItemsMenus({ item, menu, restaurantId }) {
   const { title, imageUrl, id } = item;
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
         <Box onClick={() => navigate(`/singleMenu/${id}`)}>
            <img
               src={imageUrl}
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
                     bottom: 40,
                     right: 12,
                     display: "flex",
                     gap: 1,
                  }}
               >
                  <DropdownShare />
                  <DropdownReport />
               </Box>
            </>
         )}
         <Typography fontWeight="bold">{title}</Typography>
      </Box>
   );
}

export default CartItemsMenus;
