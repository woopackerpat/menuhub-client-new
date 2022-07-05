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
import { useAuth } from "../../../../../contexts/AuthContextProvider";
import ProfileAvatar from "../../../../common/ProfileAvatar";

function AddComment({ comments, id, setComments, fetchMenusById }) {
  const [isComment, setIsComment] = useState(false);
  const [text, setText] = useState("");

  const { user } = useAuth();
  const { profilePicUrl } = user;

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
                fontWeight: "bold",
                lineHeight: "35px",
                borderRadius: "24px",
                textTransform: "none",
                backgroundColor: "#ccc",
              }}
              disableElevation
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
                fontWeight: "bold",
                lineHeight: "35px",
                borderRadius: "24px",
                textTransform: "none",
              }}
              disableElevation
            >
              Done
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link href="/myPin" sx={{ textDecoration: "none" }}>
            <IconButton>
              <ProfileAvatar width="40px" height="40px" cursor="pointer" />
              {/* <Avatar
                        sizes="large"
                        sx={{ cursor: "pointer" }}
                        src={profilePicUrl}
                     /> */}
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
