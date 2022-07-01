import {
   Box,
   TextField,
   styled,
   Button,
   Link,
   Avatar,
   IconButton,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
function AddComment({ comments, id, setComments, fetchMenusById }) {
   const [isComment, setIsComment] = useState(false);
   const [text, setText] = useState("");

   const handleSubmitComment = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post("/restaurant/comment", {
            menuId: id,
            text,
         });
         const response = await fetchMenusById(id);
         setComments(response.data.Comments);
         setIsComment(false);
      } catch (err) {
         console.log(err);
      }
   };

   const CommentBtn = styled("div")(() => ({
      display: "flex",
      flex: 1,
      position: "relative",
      borderRadius: "50px",
      backgroundColor: "#efefef",
      color: "#888",
      marginLeft: 0,
      width: "80%",
      padding: "0.8em 1em",
      "&:hover": {
         cursor: "text",
      },
   }));

   return (
      <Box>
         {isComment ? (
            <Box
               component="form"
               onSubmit={handleSubmitComment}
               sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
               <TextField
                  fullWidth
                  multiline={true}
                  maxRows={4}
                  autoFocus
                  onChange={(e) => setText(e.target.value)}
               />
               <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                  <Button
                     variant="contained"
                     color="secondary"
                     sx={{
                        textTransform: "none",
                        borderRadius: "30px",
                        backgroundColor: "#ccc",
                        color: "black",
                        fontWeight: "bold",
                     }}
                     onClick={() => {
                        setIsComment(false);
                        setText("");
                     }}
                  >
                     Cancel
                  </Button>
                  <Button
                     type="submit"
                     variant="contained"
                     {...(text === ""
                        ? { color: "secondary", disabled: true }
                        : { color: "error" })}
                     sx={{
                        textTransform: "none",
                        borderRadius: "30px",
                        fontWeight: "bold",
                     }}
                  >
                     Done
                  </Button>
               </Box>
            </Box>
         ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
               <Link href="/myPin">
                  <IconButton size="small">
                     <Avatar s sx={{ cursor: "pointer" }} />
                  </IconButton>
               </Link>
               <CommentBtn onClick={() => setIsComment(true)}>
                  Add a comment
               </CommentBtn>
            </Box>
         )}
      </Box>
   );
}

export default AddComment;
