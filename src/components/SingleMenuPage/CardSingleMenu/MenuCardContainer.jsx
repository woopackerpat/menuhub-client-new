import { Masonry } from "@mui/lab";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DetailContainer from "./CardDetailContainer/DetailContainer";
import CartItemsMenus from "../../common/cartItems/CartItemsMenus";

function MenuCardContainer({ menuId }) {
   const [menus, setMenus] = useState([]);
   const [creator, setCreator] = useState([]);
   const [allMenus, setAllMenus] = useState([]);
   const [restaurant, setRestaurant] = useState([]);
   const [posts, setPosts] = useState();
   const [comments, setComments] = useState([]);

   const fetchMenusById = async (id) => {
      try {
         return await axios.get("restaurant/menu/" + id);
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      const run = async () => {
         const res = await fetchMenusById(menuId);
         const menus = res.data.Menu;
         setMenus(menus);
         const creators = res.data.Creator;
         setCreator(creators);
         const comments = res.data.Comments;
         setComments(comments);
      };
      try {
         run();
      } catch (err) {
         console.log(err);
      }
   }, [menuId]);

   const { imageUrl, title, id, description, restaurantId } = menus;

   useEffect(() => {
      const fetchMenus = async () => {
         try {
            if (restaurantId) {
               const res = await axios.get(
                  "/restaurant/menuall/" + restaurantId
               );
               setAllMenus(res.data.Menus);
               setRestaurant(res.data.Menus[0].Restaurant.websiteUrl);
               setPosts(res.data.posts);
            }
         } catch (err) {
            console.log(err);
         } finally {
         }
      };
      fetchMenus();
   }, [menus]);
   console.log(restaurant);

   return (
      <>
         <Container fixed sx={{ mt: "40px" }}>
            <Paper
               sx={{
                  borderRadius: "40px",
                  mx: { xs: "0", lg: "60px" },
                  height: { lg: "700px" },
               }}
               style={{ overflow: "hidden" }}
               elevation={3}
            >
               <Grid container sx={{ height: "100%" }}>
                  <Grid item xs={12} lg={6}>
                     <Box sx={{ height: { xs: "300px", lg: "100%" } }}>
                        <img
                           src={imageUrl}
                           style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                           }}
                           alt=""
                        />
                     </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                     <DetailContainer
                        title={title}
                        id={id}
                        description={description}
                        comments={comments}
                        setComments={setComments}
                        fetchMenusById={fetchMenusById}
                        menuId={menuId}
                        restaurantId={restaurantId}
                        websiteUrl={restaurant}
                        creator={creator}
                        posts={posts}
                     />
                  </Grid>
               </Grid>
            </Paper>
         </Container>
         <Box sx={{ mt: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "center", py: "10px" }}>
               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Suggestions
               </Typography>
            </Box>
            <Masonry
               columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
               spacing={2}
            >
               {allMenus?.map((item) => {
                  if (item.id !== id) {
                     return <CartItemsMenus key={item.id} item={item} />;
                  }
               })}
            </Masonry>
         </Box>
      </>
   );
}

export default MenuCardContainer;
