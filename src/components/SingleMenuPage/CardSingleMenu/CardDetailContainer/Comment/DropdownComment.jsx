import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import CommmentContainer from "./CommentContainer";

function DropdownComment({
   fetchMenusById,
   comments,
   setComments,
   id,
   menuId,
}) {
   const [show, setShow] = useState(true);
   return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: "30px" }}>
         <Box
            sx={{
               display: "flex",
               gap: 2,
               justifyContent: "flex-start",
               alignItems: "center",
            }}
         >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
               {comments.length} comments
            </Typography>
            <IconButton onClick={() => setShow((prev) => !prev)}>
               {show ? (
                  <ArrowDropDownRoundedIcon fontSize="large" color="dark" />
               ) : (
                  <ArrowRightRoundedIcon fontSize="large" color="dark" />
               )}
            </IconButton>
         </Box>
         {show && (
            <CommmentContainer
               fetchMenusById={fetchMenusById}
               comments={comments}
               setComments={setComments}
               id={id}
               menuId={menuId}
            />
         )}
      </Box>
   );
}

export default DropdownComment;
