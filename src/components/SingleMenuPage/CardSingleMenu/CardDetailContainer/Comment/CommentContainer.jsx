import { Box } from "@mui/material";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";
function CommentContainer({
   setComments,
   comments,
   fetchMenusById,
   id,
   menuId,
}) {
   return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, ml: "-5px" }}>
         <CommentArea
            comments={comments}
            setComments={setComments}
            fetchMenusById={fetchMenusById}
            menuId={menuId}
         />
         <AddComment
            setComments={setComments}
            comments={comments}
            fetchMenusById={fetchMenusById}
            id={id}
         />
      </Box>
   );
}

export default CommentContainer;
