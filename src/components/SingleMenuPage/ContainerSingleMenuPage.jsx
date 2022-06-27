import { Box, Button } from '@mui/material'
import SingleCardContainer from './CardSingleMenu/SingleCardContainer'

function ContainerSingleMenu() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          alignItems: 'center',
        }}
      >
        <SingleCardContainer />
      </Box>
    </div>
  )
}

export default ContainerSingleMenu
