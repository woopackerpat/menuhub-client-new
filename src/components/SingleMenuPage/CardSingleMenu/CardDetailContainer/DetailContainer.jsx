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
}) {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 3,
         }}
      >
         <UserAction restaurantId={restaurantId} />
         <MenuInfo description={description} title={title} />
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
