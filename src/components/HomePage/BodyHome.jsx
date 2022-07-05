import { Masonry } from "@mui/lab";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import { useRestaurant } from "../../contexts/RestaurantContextProvider";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";

function BodyHome() {
   const { restaurant, isLoading, allLoadMore, totalData } = useRestaurant();

   // console.log(restaurant.length < totalData);

   return (
      <>
         <InfiniteScroll
            hasMore={restaurant.length < totalData}
            loadMore={allLoadMore}
            pageStart={0}
         >
            <Masonry
               columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
               spacing={2}
            >
               {restaurant?.map((items) => (
                  <CartItemsRestaurant
                     key={items.id}
                     Menus={items.Menus}
                     items={items}
                  />
               ))}
            </Masonry>
            <Backdrop
               sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
               }}
               open={isLoading}
            >
               <CircularProgress color="error" />
            </Backdrop>
         </InfiniteScroll>
      </>
   );
}
export default BodyHome;
