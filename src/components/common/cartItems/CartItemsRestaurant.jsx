import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import DropdownReport from "./DropdownReport";
import { useRestaurant } from "../../../contexts/RestaurantContextProvider";
import { useSearch } from "../../../contexts/SearchContextProvider";
import ButtonSave from "../ButtonSave";
import { usePin } from "../../../contexts/PinContextProvider";
import { LoadingButton } from "@mui/lab";

function CartItemsRestaurant({ Menus, items }) {
  const { pin, savePinRes } = usePin();
  const { name, id } = items;

  const profilePin = pin?.slice(0, 1).map(el => el.id);

  const restaurantId = id;
  const pinId = profilePin[0];

  const ImageUrl = Menus[0]?.imageUrl;
  const { addClick } = useSearch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { isLoading, setIsLoading } = useRestaurant();

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleSaveRestaurant = async () => {
    try {
      setIsLoading(true);
      await savePinRes({ pinId, restaurantId });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
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
          <Box onClick={() => navigate(`/allMenus/${id}`)}>
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
                <LoadingButton
                  loading={isLoading}
                  onClick={handleSaveRestaurant}
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Save
                </LoadingButton>
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
                <DropdownReport />
              </Box>
            </>
          )}
          <Typography fontWeight="bold">{name}</Typography>
        </Skeleton>
      ) : (
        <>
          <Box onClick={() => navigate(`/allMenus/${id}`)}>
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
                <LoadingButton
                  loading={isLoading}
                  onClick={handleSaveRestaurant}
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Save
                </LoadingButton>
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

export default CartItemsRestaurant;
