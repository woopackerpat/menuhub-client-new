import { LoadingButton } from "@mui/lab";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";
import ButtonSave from "../ButtonSave";

function BoxBoard({ name, pinId, restaurantId, Restaurants }) {
  const [showBoardBtn, setShowBoardBtn] = useState(false);
  const { savePinRes, fetchPin } = usePin();
  const [loading, setLoading] = useState(false);

  const getImage = Restaurants?.map(el => el.Menus?.map(item => item.imageUrl));

  const handleSaveRestaurant = async e => {
    try {
      e.stopPropagation();
      setLoading(true);
      await savePinRes({ pinId, restaurantId });
      await fetchPin();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MenuItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "20rem",
        borderRadius: "10px",
        m: "10px",
      }}
      onMouseOver={() => setShowBoardBtn(true)}
      onMouseOut={() => setShowBoardBtn(false)}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "#efefef",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {getImage?.length !== 0 && (
            <img
              src={getImage[0]}
              style={{ borderRadius: "10px", maxWidth: "40px" }}
              alt="img"
            />
          )}
        </Box>
        <Typography>{name}</Typography>
      </Box>
      {showBoardBtn && (
        <ButtonSave
          loading={loading}
          onClick={handleSaveRestaurant}
          restaurantId={restaurantId}
          pinId={pinId}
        />
      )}
    </MenuItem>
  );
}

export default BoxBoard;
