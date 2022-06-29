import { useState } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded"
import CommmentContainer from "./CommentContainer"

function DropdownComment() {
  const [show, setShow] = useState(true)
  const userComment = [
    { userId: 1, user: "John", profilePic: "", title: "Nice" },
    {
      userId: 2,
      user: "Mike",
      profilePic: "",
      title: "I like this restaurant",
    },
    { userId: 3, user: "Tom", profilePic: "", title: "Wowwwww!" },
    {
      userId: 4,
      user: "Alan",
      profilePic: "",
      title: "The beef is sooo juicy",
    },
  ]
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: "bold" }}>
          {userComment.length} comments
        </Typography>
        <IconButton onClick={() => setShow(prev => !prev)}>
          {show ? (
            <ArrowDropDownRoundedIcon fontSize='large' color='dark' />
          ) : (
            <ArrowRightRoundedIcon fontSize='large' color='dark' />
          )}
        </IconButton>
      </Box>
      {show && <CommmentContainer userComment={userComment} />}
    </Box>
  )
}

export default DropdownComment
