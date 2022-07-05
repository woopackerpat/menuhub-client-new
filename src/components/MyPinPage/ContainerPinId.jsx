import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { usePin } from "../../contexts/PinContextProvider";
import CartItemsPinId from "../common/cartItems/CartItemsPinId";

function ContainerPinId({ id }) {
  const { pinById, fetchPinById } = usePin();

  useEffect(() => {
    fetchPinById(id);
  }, []);

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
        {pinById.name}
      </Typography>
      <Masonry
        columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
        spacing={2}
      >
        {pinById.Restaurants?.map(items => (
          <CartItemsPinId
            key={items?.id}
            pinId={pinById?.id}
            Menus={items.Menus}
            items={items}
          />
        ))}
      </Masonry>
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
