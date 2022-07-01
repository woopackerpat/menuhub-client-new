import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton } from "@mui/material";
import DropdownProfile from "../../../common/cartItems/DropdownProfile";

function UserActionNavbar() {
   // like state for testing
   const [isLike, setIsLike] = useState(false);

   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
         }}
      >
         <Box>
            <IconButton
               sx={{
                  color: "black",
               }}
            >
               <MoreHorizIcon fontSize="large" />
            </IconButton>
            <IconButton
               sx={{
                  color: "black",
               }}
            >
               <ShareIcon fontSize="large" />
            </IconButton>
            <IconButton
               sx={{
                  color: "black",
               }}
            >
               <LinkIcon fontSize="large" />
            </IconButton>
            <IconButton
               sx={{
                  color: "black",
               }}
               onClick={() => setIsLike((prev) => !prev)}
            >
               {isLike ? (
                  <FavoriteIcon fontSize="large" color="error" />
               ) : (
                  <FavoriteBorderIcon fontSize="large" />
               )}
            </IconButton>
         </Box>
         <Box sx={{ display: "flex" }}>
            <DropdownProfile color="dark" />
            <Button variant="contained">Save</Button>
         </Box>
      </Box>
   );
}

export default UserActionNavbar;
