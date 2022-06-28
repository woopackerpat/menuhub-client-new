import { Box } from '@mui/material'
import DropdownComment from './Comment/DropdownComment'
import MenuInfo from './MenuInfo'
import UserAction from './UserAction'

function DetailContainer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: 3,
      }}
    >
      <UserAction />
      <MenuInfo />
      <DropdownComment />
    </Box>
  )
}

export default DetailContainer
