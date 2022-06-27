import { Box } from '@mui/material'
import MenuCardContainer from './CardSingleMenu/MenuCardContainer'

function ContainerSingleMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <MenuCardContainer />
    </Box>
  )
}

export default ContainerSingleMenu
