import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { usePin } from "../../contexts/PinContextProvider";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";

function ContainerPinId() {
  const { pinById } = usePin();
  console.log(pinById);
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
      <Typography variant="h6" fontWeight="bold">
        {pinById.name}
      </Typography>
      <Box>
        <Masonry
          columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
          spacing={2}
        >
          {pinById?.Restaurants.map(items => (
            <CartItemsRestaurant
              key={items?.id}
              Menus={items.Menus}
              items={items}
            />
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

export default ContainerPinId;

const data = [
  {
    //   author: "test",
    download_url:
      "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    //   author: "test",
    download_url:
      "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
