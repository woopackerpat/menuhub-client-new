import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DetailContainer from "./CardDetailContainer/DetailContainer";

function MenuCardContainer({ menuId }) {
   const [menus, setMenus] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
   const [comments, setComments] = useState([]);
   const fetchMenusById = async (id) => {
      try {
         setIsLoading(true)
         return await axios.get("restaurant/menu/" + id);
      } catch (err) {
         console.log(err);
      } finally {
         setIsLoading(false)
      }
   };
   useEffect(() => {
      const run = async () => {
         const res = await fetchMenusById(menuId);
         const menus = res.data.Menu;
         setMenus(menus);
         const comments = res.data.Comments;
         setComments(comments);
      };
      try {
         run();
      } catch (err) {
         console.log(err);
      }
   }, []);

   const { imageUrl, title, id, description, restaurantId } = menus;

   return (
      <Box
         sx={{
            display: {
               xs: { flexWrap: "wrap" },
               lg: "flex",
               xl: "flex",
            },
            gap: 3,
            width: "60%",
            mx: "auto",
            boxShadow: "1px 1px 10px 8px #efefef",
            borderRadius: "16px",
            p: 3,
            mt: 10,
         }}
      >
         <Box
            sx={{
               display: { xs: { width: "50%" }, md: { width: "50%" } },
               width: { xl: "100%", lg: "100%", md: "100%" },
            }}
         >
            <Box sx={{ height: "100%" }}>
               <img
                  src={imageUrl}
                  style={{
                     borderRadius: "16px",
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
                  alt=""
               />
            </Box>
         </Box>
         <Box
            sx={{
               display: { xs: { width: "50%" } },
               width: { xl: "100%", lg: "100%", md: "100%" },
               height: "100%",
               borderRadius: "0 16px 16px 0",
               backgroundColor: "white",
            }}
         >
            <DetailContainer
               title={title}
               id={id}
               description={description}
               comments={comments}
               setComments={setComments}
               fetchMenusById={fetchMenusById}
               menuId={menuId}
               restaurantId={restaurantId}
            />
         </Box>
      </Box>
   );
}

export default MenuCardContainer;
