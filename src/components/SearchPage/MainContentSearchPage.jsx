import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import { useInfiniteScroll } from "../../contexts/InfiniteScrollContext";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";
import { useSearch } from "../../contexts/SearchContextProvider";

function MainContentSearchPage() {
   const {page} = useSearch()
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
         <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
         >
            {page?.map((items) => (
               <CartItemsRestaurant
                  key={items.id}
                  Menus={items.Menus}
                  items={items}
               />
            ))}
         </Masonry>
      </Box>
      // <Box>
      //    {isLoading ? (
      //       <p>Loading...</p>
      //    ) : isError ? (
      //       <p>There was an error</p>
      //    ) : (
      //       <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
      //          <Masonry
      //             columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
      //             spacing={2}
      //          >
      //             {page.map((post) =>
      //                post.results.map((post) => (
      //                   <CartItemsRestaurant key={post.id} post={post} />
      //                ))
      //             )}
      //          </Masonry>
      //       </InfiniteScroll>
      //    )}
      // </Box>
   );
}
export default MainContentSearchPage;
