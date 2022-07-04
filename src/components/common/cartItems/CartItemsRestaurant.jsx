import { Button, IconButton, Skeleton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import { Scale } from "@mui/icons-material";
import DropdownReport from "./DropdownReport";
import { useRestaurant } from "../../../contexts/RestaurantContextProvider";
import { useSearch } from "../../../contexts/SearchContextProvider";
import ButtonSave from "../ButtonSave";

function CartItemsRestaurant({ Menus, items }) {
  const { name, id } = items;

  const ImageUrl = Menus[0]?.imageUrl;
  const { addClick } = useSearch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { isLoading } = useRestaurant();

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleCreateAlbum = e => {
    e.stopPropagation();
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
                <DropdownProfile id={id} />
              </Box>
              <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                <ButtonSave onClick={handleCreateAlbum} restaurantId={id} />
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
                {<DropdownProfile id={id} />}
              </Box>
              <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                <Button
                  variant="contained"
                  onClick={() => handleCreateAlbum}
                  color="error"
                >
                  Save
                </Button>
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
