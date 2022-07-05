import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import CartItemsRestaurant from "../common/cartItems/CartItemsRestaurant";
import { useSearch } from "../../contexts/SearchContextProvider";

function MainContentSearchPage() {
   const { page } = useSearch();

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
   );
}
export default MainContentSearchPage;
