import {
  Box,
  TextField,
  styled,
  Button,
  Link,
  Avatar,
  IconButton,
  FormControl,
} from "@mui/material"
import { useState } from "react"
function AddComment() {
  const [isComment, setIsComment] = useState(false)
  const [text, setText] = useState("")

  const handleSubmitComment = async () => {
    try {
    } catch (err) {
      console.log(err)
    }
  }

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
  }))

  return (
    <Box>
      {isComment ? (
        <Box
          component='form'
          onSubmit={handleSubmitComment}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            fullWidth
            multiline={true}
            maxRows={4}
            autoFocus
            onChange={e => setText(e.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
            <Button
              variant='contained'
              color='secondary'
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                backgroundColor: "#ccc",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={() => {
                setIsComment(false)
                setText("")
              }}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              variant='contained'
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
          <Link href='/myPin'>
            <IconButton size='small'>
              <Avatar sx={{ cursor: "pointer" }} />
            </IconButton>
          </Link>
          <CommentBtn onClick={() => setIsComment(true)}>
            Add a comment
          </CommentBtn>
        </Box>
      )}
    </Box>
  )
}

export default AddComment
