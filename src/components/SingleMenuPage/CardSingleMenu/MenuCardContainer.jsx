import { Box } from '@mui/material'
import DetailContainer from './CardDetailContainer/DetailContainer'

function MenuCardContainer() {
  const src = 'https://picsum.photos/300/520'
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        width: '54%',
        mx: 'auto',
        p: 3,
        boxShadow: '1px 1px 10px 8px #efefef',
        borderRadius: '16px',
        mt: 10,
      }}
    >
      <Box
        sx={{
          width: '50%',
        }}
      >
        <Box sx={{ height: '100%' }}>
          <img
            src={src}
            style={{
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              // maxHeight: '500px',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '50%',
          borderRadius: '0 16px 16px 0',
          backgroundColor: 'white',
        }}
      >
        <DetailContainer />
      </Box>
    </Box>
  )
}

export default MenuCardContainer
