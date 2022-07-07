import { Box, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePin } from "../../../contexts/PinContextProvider";
import ButtonSave from "../ButtonSave";

function BoxBoard({ name, pinId, restaurantId, pins }) {
  const [showBoardBtn, setShowBoardBtn] = useState(false);
  const { savePinRes, fetchPinById } = usePin();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const image = pins
    ?.filter(el => el.id === pinId)
    .map(el => el.Restaurants[0]?.Menus[0].imageUrl);

  const handleSaveRestaurant = async e => {
    try {
      e.stopPropagation();
      setLoading(true);
      await savePinRes({ pinId, restaurantId });
      fetchPinById(pinId);
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
      onClick={() => navigate("/myPin/" + pinId)}
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
          {image[0] && (
            <img
              src={image[0]}
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
