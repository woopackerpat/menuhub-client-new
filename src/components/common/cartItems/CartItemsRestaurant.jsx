import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownReport from "./DropdownReport";
import { useRestaurant } from "../../../contexts/RestaurantContextProvider";
import { useSearch } from "../../../contexts/SearchContextProvider";
import { usePin } from "../../../contexts/PinContextProvider";
import ButtonSaveProfile from "../ButtonSaveProfile";
import ShareMyCreate from "../../MyPinPage/createdMyPin/ShareMyCreate";
import HandleMyCreate from "../../MyPinPage/createdMyPin/HandleMyCreate";

function CartItemsRestaurant({ Menus, items }) {
  const { pin, savePinRes } = usePin();
  const { name, id } = items;

  const { addClick } = useSearch();
  const profilePin = pin?.slice(0, 1).map((el) => el.id);

  const restaurantId = id;
  const pinId = profilePin[0];

  const ImageUrl = Menus[0]?.imageUrl;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { isLoading } = useRestaurant();

  const location = useLocation();

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleClick = (id) => {
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

  // console.log(location.pathname === "/myPin/created-pin")

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
              {location.pathname === "/myPin/created-pin" ? (
                <></>
              ) : (
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
                </>
              )}

              <Box
                sx={{
                  position: "absolute",
                  bottom: 40,
                  right: 12,
                  display: "flex",
                  gap: 1,
                }}
              >
                {location.pathname === "/myPin/created-pin" ? (
                  <>
                    <ShareMyCreate id={id} />
                    <HandleMyCreate id={id} />
                  </>
                ) : (
                  <>
                    <DropdownShare id={id} />
                    <DropdownReport />
                  </>
                )}
              </Box>
            </>
          )}
          <Typography fontWeight="bold" sx={{ pl: "12px" }}>
            {name.length > 20 ? name.slice(0, 20) + '...' : name}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default CartItemsRestaurant;
