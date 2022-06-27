import { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ShareIcon from '@mui/icons-material/Share'
import LinkIcon from '@mui/icons-material/Link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Button, IconButton } from '@mui/material'

function UserActionNavbar() {
  // like state for testing
  const [isLike, setIsLike] = useState(true)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'cent',
        gap: 3.5,
      }}
    >
      <IconButton
        sx={{
          color: 'black',
        }}
      >
        <MoreHorizIcon fontSize="large" />
      </IconButton>
      <ShareIcon fontSize="large" />
      <LinkIcon fontSize="large" />
      {isLike ? (
        <FavoriteIcon fontSize="large" color="error" />
      ) : (
        <FavoriteBorderIcon fontSize="large" />
      )}
    </Box>
  )
}

export default UserActionNavbar
