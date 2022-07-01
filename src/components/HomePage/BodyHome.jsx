import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import CartItems from "../common/cartItems/CartItems";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { useInfiniteScroll } from "../../contexts/InfiniteScrollContext";
import { useRestaurant } from "../../contexts/RestaurantContextProvider";

function BodyHome() {
   const { restaurant } = useRestaurant();
   console.log("restaurant  ", restaurant);
   // const { fetchPosts } = useInfiniteScroll();
   // const { data, isLoading, isError, hasNextPage, fetchNextPage } =
   //    useInfiniteQuery("posts", fetchPosts, {
   //       getNextPageParam: (lastPage, pages) => {
   //          if (lastPage.nextPage < lastPage.totalPages) {
   //             return lastPage.nextPage;
   //          } else {
   //             return undefined;
   //          }
   //       },
   //    });

   return (
      <Box>
         {/* {isLoading ? (
            <p>Loading...</p>
         ) : isError ? (
            <p>There was an error</p>
         ) : (
            <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
               <Masonry
                  columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
                  spacing={2}
               >
                  {data.pages.map((page) =>
                     page.results.map((post) => (
                        <CartItems key={post.id} post={post} />
                     ))
                  )}
               </Masonry>
            </InfiniteScroll>
         )} */}

         {/* <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
         >
            {restaurant?.map((item) =>
               item.Menus?.map((menus) => {
                  return (
                     <CartItems
                        key={menus.id}
                        menus={menus}
                        name={item.name}
                        id={item.id}
                     />
                  );
               })
            )}
            
         </Masonry> */}

         <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
         >
            {restaurant?.map((items) => (
               <CartItems key={items.id} Menus={items.Menus} items={items} />
            ))}
         </Masonry>
      </Box>
   );
}
export default BodyHome;
