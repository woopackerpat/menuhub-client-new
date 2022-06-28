import { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import CommmentContainer from './CommmentContainer'

function DropdownComment() {
  const [show, setShow] = useState(true)
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          3 comments
        </Typography>
        <IconButton onClick={() => setShow(prev => !prev)}>
          {show ? (
            <ArrowDropDownRoundedIcon fontSize="large" color="dark" />
          ) : (
            <ArrowRightRoundedIcon fontSize="large" color="dark" />
          )}
        </IconButton>
      </Box>
      {show && <CommmentContainer />}
    </Box>
  )
}

export default DropdownComment
