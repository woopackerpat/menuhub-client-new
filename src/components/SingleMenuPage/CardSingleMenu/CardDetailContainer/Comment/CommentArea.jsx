import { Avatar, Box, IconButton, Link, Typography } from '@mui/material'

function CommentArea({ userComment }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxHeight: '10em',
        overflowY: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      {userComment.map(el => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link href={`/myPin`}>
            <IconButton size="small">
              <Avatar src={el.profilePic} />
            </IconButton>
          </Link>
          <Typography fontWeight="bold">{el.user}</Typography>
          <Typography>{el.title}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default CommentArea
