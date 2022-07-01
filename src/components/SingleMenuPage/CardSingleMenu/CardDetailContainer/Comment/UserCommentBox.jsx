import {
   Avatar,
   Box,
   Button,
   IconButton,
   Link,
   styled,
   TextField,
   Typography,
} from "@mui/material";
import { useAuth } from "../../../../../contexts/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../../../../config/axios";
import { useState } from "react";
import DropdownCommentEdit from "./DropdownCommentEdit";

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
      <>
         <Box sx={{ position: "relative" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href={`/myPin`}>
                     <IconButton size="small">
                        <Avatar src={profilePicUrl} />
                     </IconButton>
                  </Link>
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                     }}
                  >
                     <Typography fontWeight="bold">{`${firstName} ${lastName}`}</Typography>
                     {user.id === id && (
                        <Box
                           sx={{
                              display: "flex",
                              right: "0",
                              top: 8,
                           }}
                        >
                           <DropdownCommentEdit
                              isEdit={isEdit}
                              setIsEdit={setIsEdit}
                           />
                        </Box>
                     )}
                  </Box>
               </Box>
               {isEdit ? (
                  <Box sx={{ position: "relative" }}>
                     <Box
                        component="form"
                        onSubmit={handleEdit}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           gap: 2,
                        }}
                     >
                        <TextField
                           fullWidth
                           multiline={true}
                           maxRows={4}
                           autoFocus
                           onChange={(e) => setTextEdit(e.target.value)}
                        />
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "end",
                              gap: 1,
                           }}
                        >
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
                                 setIsEdit(false);
                                 setTextEdit("");
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
                     {/* <CloseIcon
                        sx={{ position: "absolute", top: 16, right: 10 }}
                     /> */}
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
