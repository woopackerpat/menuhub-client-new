import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DetailContainer from "./CardDetailContainer/DetailContainer";

function MenuCardContainer({ menuId }) {
   const [menus, setMenus] = useState([]);
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
         console.log(res.data);
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

   const { imageUrl, title, id, description } = menus;

   return (
      <Box
         sx={{
            display: "flex",
            gap: 3,
            width: "60%",
            mx: "auto",
            p: 3,
            boxShadow: "1px 1px 10px 8px #efefef",
            borderRadius: "16px",
            mt: 10,
         }}
      >
         <Box
            sx={{
               width: "50%",
            }}
         >
            <Box sx={{ height: "100%" }}>
               <img
                  src={imageUrl}
                  style={{
                     borderRadius: "16px",
                     width: "100%",
                  }}
                  alt=""
               />
            </Box>
         </Box>
         <Box
            sx={{
               width: "50%",
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
            />
         </Box>
      </Box>
   );
}

export default MenuCardContainer;
