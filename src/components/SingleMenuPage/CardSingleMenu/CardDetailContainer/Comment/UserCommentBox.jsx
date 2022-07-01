import {
   Avatar,
   Box,
   IconButton,
   Link,
   TextField,
   Typography,
} from "@mui/material";
import { useAuth } from "../../../../../contexts/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../../../../config/axios";
import { useState } from "react";

function UserCommentBox({ comment, fetchMenusById, setComments, menuId }) {
   const {
      User: { firstName, lastName, id, profilePicUrl },
      id: commentId,
      text,
   } = comment;

   const [textEdit, setTextEdit] = useState("");

   const [isEdit, setIsEdit] = useState(false);

   const { user } = useAuth();

   const handleEdit = async () => {
      try {
         await axios.patch("/restaurant/comment", { commentId, text });
         const response = await fetchMenusById(menuId);
         setComments(response.data.Comments);
      } catch (err) {
         console.log(err);
      }
   };

   const handleDelete = async () => {
      try {
         console.log(commentId);
         await axios.delete("/restaurant/comment/" + commentId);
         const response = await fetchMenusById(menuId);
         console.log(response.data.Comments);
         setComments(response.data.Comments);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <Box sx={{ position: "relative" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href={`/myPin`}>
                     <IconButton size="small">
                        <Avatar src={profilePicUrl} />
                     </IconButton>
                  </Link>
                  <Box>
                     <Typography fontWeight="bold">{`${firstName} ${lastName}`}</Typography>
                     {user.id === id && (
                        <Box
                           sx={{
                              display: "flex",
                              right: "0",
                              top: 8,
                           }}
                        >
                           <IconButton onClick={() => setIsEdit(true)}>
                              <EditIcon fontSize="small" />
                           </IconButton>
                           <IconButton onClick={handleDelete}>
                              <DeleteIcon fontSize="small" />
                           </IconButton>
                        </Box>
                     )}
                  </Box>
               </Box>
               {isEdit ? (
                  <Box sx={{ position: "relative" }}>
                     <TextField
                        fullWidth
                        multiline={true}
                        autoFocus
                        onChange={(e) => setTextEdit(e.target.value)}
                     />
                     <CloseIcon
                        sx={{ position: "absolute", top: 16, right: 10 }}
                     />
                  </Box>
               ) : (
                  <Typography>{text}</Typography>
               )}
            </Box>
         </Box>
      </>
   );
}
export default UserCommentBox;
