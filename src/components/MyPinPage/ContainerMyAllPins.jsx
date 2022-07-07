import { Masonry } from "@mui/lab";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";
import CartItemsAllPin from "../common/cartItems/CartItemsAllPin";
import { useNavigate } from "react-router-dom";

function ContainerMyAllPins() {
  const { pin } = usePin();

  const navigate = useNavigate();

  const allRestaurants = getAllPins(pin);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ m: 2 }}>
        All Pins
      </Typography>
      {allRestaurants.length !== 0 ? (
        <Masonry
          columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
          spacing={2}
        >
          {allRestaurants?.map(items => (
            <CartItemsAllPin key={items.id} Menus={items.Menus} items={items} />
          ))}
        </Masonry>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            gap: 4,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            No saved restaurants yet
          </Typography>
          <Box
            sx={{
              bgcolor: "#efefef",
              borderRadius: "50px",
              padding: "8px 20px",
              textDecoration: "none",
              display: "flex",
              gap: 1,
              alignItems: "center",
              transition: "all .5s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            <Typography fontWeight="bold">View All Restaurants</Typography>
            <IconButton>
              <ArrowRightAltRoundedIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContainerMyAllPins;
