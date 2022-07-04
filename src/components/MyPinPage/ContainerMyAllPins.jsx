import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { usePin } from "../../contexts/PinContextProvider";
import { getAllPins } from "../../services/getAllPinsUnique";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";

function ContainerMyAllPins() {
  const { pin } = usePin();

  const allRestaurants = getAllPins(pin);
  // console.log(allRestaurants);

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
      <Typography variant="h6" fontWeight="bold" sx={{ m: 2 }}>
        All Pins
      </Typography>
      <Box>
        {pin && (
          <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
          >
            {allRestaurants?.map(items => (
              <CartItemsRestaurant
                key={items.id}
                Menus={items.Menus}
                items={items}
              />
            ))}
          </Masonry>
        )}
      </Box>
    </Box>
  );
}

export default ContainerMyAllPins;
