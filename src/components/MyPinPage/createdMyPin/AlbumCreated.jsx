import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";
import CartItemsRestaurant from "../../common/cartItems/CartItemsRestaurant";

function AlbumCreated() {
  const { fetchMyCreated, createdPin } = usePin();
  

  useEffect(() => {
    const fetchAllCreated = async () => {
      await fetchMyCreated();
    };
    fetchAllCreated();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
      }}
    >
      {createdPin?.length === 0 ? (
        <Typography fontWeight="bold" variant="h4">
          No created restaurants yet
        </Typography>
      ) : (
        <Masonry
          columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
          spacing={2}
        >
          {createdPin?.map(items => (
            <CartItemsRestaurant
              key={items.id}
              Menus={items.Menus}
              items={items}
            />
          ))}
        </Masonry>
      )}
    </Box>
  );
}

export default AlbumCreated;
