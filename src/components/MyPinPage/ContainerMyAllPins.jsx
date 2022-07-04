import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { usePin } from "../../contexts/PinContextProvider";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";

function ContainerMyAllPins() {
  const { pin } = usePin();
  const allPins = pin?.map(el => el.Restaurants);
  // console.log(allPins);

  // gather all restaurants into one array
  const arr = [];
  allPins.forEach(pins => {
    pins.forEach(data => {
      arr.push(data);
    });
  });
  // console.log(arr);

  // make it unique by id
  let uniqueRes = [...new Map(arr?.map(item => [item["id"], item])).values()];
  // console.log(uniqueRes);

  // sort by createdAt
  const allRestaurants = uniqueRes.sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );
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
      <Typography variant="h6" fontWeight="bold">
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
