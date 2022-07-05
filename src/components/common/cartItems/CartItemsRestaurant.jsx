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
import ButtonSaveProfile from "../ButtonSaveProfile";

function CartItemsRestaurant({ Menus, items }) {
  const { pin, savePinRes } = usePin();
  const { name, id } = items;

  const { addClick } = useSearch();
  const profilePin = pin?.slice(0, 1).map(el => el.id);

  const restaurantId = id;
  const pinId = profilePin[0];

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
                <ButtonSaveProfile
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
                {<DropdownProfile restaurantId={id} />}
              </Box>
              <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                <ButtonSaveProfile
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
          <Typography fontWeight="bold" sx={{ pl: "12px" }}>
            {name}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default CartItemsRestaurant;
