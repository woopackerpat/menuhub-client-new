import { Box } from "@mui/material";
import DropdownComment from "./Comment/DropdownComment";
import MenuInfo from "./MenuInfo";
import UserAction from "./UserAction";

function DetailContainer({
   title,
   id,
   description,
   fetchMenusById,
   setComments,
   comments,
   menuId,
   restaurantId,
   creator,
   websiteUrl,
   posts
}) {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 5,
         }}
      >
         <UserAction restaurantId={restaurantId} />
         <MenuInfo description={description} title={title} creator={creator} websiteUrl={websiteUrl} posts={posts}/>
         <DropdownComment
            fetchMenusById={fetchMenusById}
            comments={comments}
            setComments={setComments}
            id={id}
            menuId={menuId}
         />
      </Box>
   );
}

export default DetailContainer;
