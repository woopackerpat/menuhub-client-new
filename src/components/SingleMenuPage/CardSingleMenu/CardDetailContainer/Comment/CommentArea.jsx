import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";
import UserCommentBox from "./UserCommentBox";

function CommentArea({ comments, fetchMenusById, id, setComments, menuId }) {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxHeight: "10em",
            overflowY: "auto",
            scrollbarWidth: "none",
         }}
      >
         {comments.map((comment) => (
            <UserCommentBox
               key={comment.id}
               id={id}
               comment={comment}
               fetchMenusById={fetchMenusById}
               setComments={setComments}
               menuId={menuId}
            />
         ))}
      </Box>
   );
}

export default CommentArea;
