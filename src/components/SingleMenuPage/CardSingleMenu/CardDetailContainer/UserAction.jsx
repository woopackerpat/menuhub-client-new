import { useEffect, useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import DropdownProfile from "../../../common/cartItems/DropdownProfile";
import { useRestaurant } from "../../../../contexts/RestaurantContextProvider";
import DropdownShare from "../../../common/cartItems/DropdownShare";
import DropdownReport from "../../../common/cartItems/DropdownReport";
import axios from "../../../../config/axios";
import ButtonSave from "../../../common/ButtonSave";
import { usePin } from "../../../../contexts/PinContextProvider";

function UserActionNavbar({ restaurantId }) {
  const [loading, setLoading] = useState(false);

  const { pin, savePinRes } = usePin();

  const profilePin = pin?.slice(0, 1).map(el => el.id);
  const pinId = profilePin[0];

  // like state for testing

  const { like, fetchLike } = useRestaurant();
  console.log(like);

  const { createLike } = useRestaurant();
  const handleClickLike = async () => {
    await createLike(restaurantId);
    fetchLike(restaurantId);
  };

  useEffect(() => {
    if (restaurantId) {
      fetchLike(restaurantId);
      console.log("test");
    }
  }, [restaurantId]);

  const handleSaveRestaurant = async () => {
    try {
      setLoading(true);
      await savePinRes({ pinId, restaurantId });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
        <ButtonSave
          loading={loading}
          onClick={handleSaveRestaurant}
          restaurantId={restaurantId}
        />
      </Box>
    </Box>
  );
}

export default UserActionNavbar;
