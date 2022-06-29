import { Box } from '@mui/material'
import { useState } from 'react'
import AddComment from './AddComment'
import CommentArea from './CommentArea'
function CommentContainer({ userComment }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <CommentArea userComment={userComment} />
      <AddComment />
    </Box>
  )
}

export default CommentContainer
