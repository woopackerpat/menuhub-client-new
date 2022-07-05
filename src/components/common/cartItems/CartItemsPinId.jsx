import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import DropdownReport from "./DropdownReport";
import { useRestaurant } from "../../../contexts/RestaurantContextProvider";
import { useSearch } from "../../../contexts/SearchContextProvider";
import { usePin } from "../../../contexts/PinContextProvider";
import ButtonSave from "../ButtonSave";

function CartItemsPinId({ pinId, Menus, items }) {
  const { savePinRes } = usePin();
  const { name, id } = items;

  const { addClick } = useSearch();

  const restaurantId = id;

  const ImageUrl = Menus[0]?.imageUrl;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { isLoading } = useRestaurant();

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleClick = id => {
    addClick(id);
    navigate(`/allMenus/${id}`);
  };

  const handleSaveRestaurant = async () => {
    try {
      // setIsLoading(true);
      await savePinRes({ pinId, restaurantId });
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="hvr-grow"
    >
      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ borderRadius: "24px" }}
        >
          <Box>
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
                <DropdownProfile restaurantId={id} />
              </Box>
              <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                <ButtonSave
                  loading={isLoading}
                  onClick={handleSaveRestaurant}
                  restaurantId={id}
                  pinId={pinId}
                />
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
                <DropdownShare id={id} />
                <DropdownReport />
              </Box>
            </>
          )}
          <Typography fontWeight="bold">{name}</Typography>
        </Skeleton>
      ) : (
        <>
          <Box onClick={() => handleClick(restaurantId)}>
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
                {<DropdownProfile shareId={`${id}`} />}
              </Box>
              <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                <ButtonSave
                  loading={isLoading}
                  onClick={handleSaveRestaurant}
                  restaurantId={id}
                  pinId={pinId}
                />
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
                <DropdownShare id={id} />
                <DropdownReport />
              </Box>
            </>
          )}
          <Typography fontWeight="bold">{name}</Typography>
        </>
      )}
    </Box>
  );
}

export default CartItemsPinId;
