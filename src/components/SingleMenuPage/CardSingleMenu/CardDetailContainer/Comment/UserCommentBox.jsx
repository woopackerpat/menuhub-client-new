import {
   Box,
   Button,
   IconButton,
   Link,
   TextField,
   Typography,
} from "@mui/material";
import { useAuth } from "../../../../../contexts/AuthContextProvider";
import axios from "../../../../../config/axios";
import { useState } from "react";
import DropdownCommentEdit from "./DropdownCommentEdit";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProfileAvatar from "../../../../common/ProfileAvatar";

function UserCommentBox({ comment, fetchMenusById, setComments, menuId }) {
   dayjs.extend(relativeTime);
   const {
      User: { firstName, lastName, id, profilePicUrl },
      id: commentId,
      text,
      createdAt,
   } = comment;

   const [textEdit, setTextEdit] = useState(text || "");

   const [isEdit, setIsEdit] = useState(false);

   const { user } = useAuth();

   const handleEdit = async (e) => {
      e.preventDefault();
      try {
         await axios.patch("/restaurant/comment", {
            commentId,
            text: textEdit,
         });
         const response = await fetchMenusById(menuId);
         setComments(response.data.Comments);
         setIsEdit(false);
         console.log(response.data);
      } catch (err) {
         console.log(err);
      }
   };

   const handleDelete = async () => {
      try {
         console.log(commentId);
         await axios.delete("/restaurant/comment/" + commentId);
         const response = await fetchMenusById(menuId);
         setComments(response.data.Comments);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: 1,
            }}
         >
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "centers",
                  // gap: 4,
                  minWidth: "100px",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: 2,
                  }}
               >
                  <Link href={`/myPin`}>
                     <IconButton size="small">
                        <ProfileAvatar
                           commenterPic={profilePicUrl}
                           commenterFirstName={firstName}
                           commenterLastName={lastName}
                        />
                        {/* <Avatar src={profilePicUrl} /> */}
                     </IconButton>
                  </Link>
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                     }}
                  >
                     <Typography
                        fontWeight="bold"
                        sx={{ mb: "-5px", pt: "3px" }}
                     >{`${firstName} ${lastName}`}</Typography>

                     <Box
                        sx={{
                           display: "flex",
                           gap: 1,
                           alignItems: "center",
                           minWidth: "130px",
                        }}
                     >
                        <Typography variant="caption" gutterBottom>
                           {dayjs(createdAt).fromNow()}
                        </Typography>
                        <DropdownCommentEdit
                           setIsEdit={setIsEdit}
                           handleDelete={handleDelete}
                        />
                     </Box>
                  </Box>
               </Box>
            </Box>
            {isEdit ? (
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
                     value={textEdit}
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
                        {...(textEdit === text
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
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "flex-start",
                     justifyContent: "flex-start",
                     mt: "-26px",
                  }}
               >
                  <Typography style={{ fontSize: "16px" }}>{text}</Typography>
               </Box>
            )}
         </Box>
      </>
   );
}
export default UserCommentBox;
