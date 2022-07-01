import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import CartItemsMenus from "../common/cartItems/CartItemsMenus";

function MainContentAllMenusPage({ restaurantId }) {
   const [menus, setMenus] = useState([]);
   useEffect(() => {
      const fetchMenus = async () => {
         try {
            const res = await axios.get("/restaurant/menuall/" + restaurantId);
            console.log(res.data);
            setMenus(res.data.Menus);
         } catch (err) {
            console.log(err);
         }
      };
      fetchMenus();
   }, []);
   console.log({ menus });
   return (
      <Box>
         <Masonry
            columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
            spacing={2}
         >
            {menus.map((item) => (
               <CartItemsMenus key={item.id} item={item} />
            ))}
         </Masonry>
      </Box>
   );
}

export default MainContentAllMenusPage;
