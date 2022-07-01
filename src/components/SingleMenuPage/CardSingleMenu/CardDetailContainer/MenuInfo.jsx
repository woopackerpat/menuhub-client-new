import { Box, Link, Typography } from '@mui/material'

function MenuInfo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Link href="#">Rakthai.com</Link>
      <Link href="#" underline="none">
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Restaurant ABC
        </Typography>
      </Link>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit ea
        aperiam ab repudiandae necessitatibus earum! Nobis laborum amet sed eos
        reprehenderit! Quaerat minima asperiores veritatis, quos nulla ipsum
        unde.
      </Typography>
    </Box>
  )
}

export default MenuInfo
