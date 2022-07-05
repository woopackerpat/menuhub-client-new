import { useEffect, useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton } from "@mui/material";
import DropdownProfile from "../../../common/cartItems/DropdownProfile";
import { useRestaurant } from "../../../../contexts/RestaurantContextProvider";
import DropdownShare from "../../../common/cartItems/DropdownShare";
import DropdownReport from "../../../common/cartItems/DropdownReport";
import axios from "../../../../config/axios";

function UserActionNavbar({ restaurantId }) {
  // like state for testing

  const { like, fetchLike } = useRestaurant();

  const { createLike } = useRestaurant();
  const handleClickLike = async () => {
    await createLike(restaurantId);
    fetchLike(restaurantId);
  };

  useEffect(() => {
    if (restaurantId) {
      fetchLike(restaurantId);
    }
  }, [restaurantId]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <DropdownReport />
        <DropdownShare id={restaurantId} />
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
          {like ? (
            <FavoriteIcon fontSize="large" color="error" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
      <Box sx={{ display: "flex" }}>
        <DropdownProfile color="dark" id={restaurantId} />
        <Button
          variant="contained"
          color="error"
          sx={{
            fontWeight: "bold",
            lineHeight: "35px",
            borderRadius: "24px",
            textTransform: "none",
          }}
          disableElevation
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default UserActionNavbar;
