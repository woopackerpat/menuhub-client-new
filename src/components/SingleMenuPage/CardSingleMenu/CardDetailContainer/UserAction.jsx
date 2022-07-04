import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton } from "@mui/material";
import DropdownProfile from "../../../common/cartItems/DropdownProfile";
import { useRestaurant } from "../../../../contexts/RestaurantContextProvider";
import DropdownShare from "../../../common/cartItems/DropdownShare";
import DropdownReport from "../../../common/cartItems/DropdownReport";

function UserActionNavbar({ restaurantId }) {
   // like state for testing
   const [isLike, setIsLike] = useState(false);
   const { createLike, restaurant } = useRestaurant();
   console.log(restaurant);
   const handleClickLike = async () => {
      await createLike(restaurantId);
      setIsLike((prev) => !prev);
      console.log(restaurantId);
   };

   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
         }}
      >
         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DropdownReport />
            <DropdownShare />
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
               onClick={handleClickLike}
            >
               {!isLike ? (
                  <FavoriteIcon fontSize="large" color="error" />
               ) : (
                  <FavoriteBorderIcon fontSize="large" />
               )}
            </IconButton>
         </Box>
         <Box sx={{ display: "flex" }}>
            <DropdownProfile color="dark" id={restaurantId} />
            <Button variant="contained" color="error">
               Save
            </Button>
         </Box>
      </Box>
   );
}

export default UserActionNavbar;
