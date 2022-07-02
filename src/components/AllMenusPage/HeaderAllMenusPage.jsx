import { Box, Button, Typography } from "@mui/material"

function HeaderAllMenusPage({ menus }) {
  const name = menus[0]?.Restaurant.name

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src='https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1095550.jpg&fm=jpg'
            alt='logo'
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "60px",
              height: "60px",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              padding: 1,
              color: "Black",
              "&:hover": {
                color: "#000000",
                backgroundColor: "#efefef",
              },
            }}
          >
            <Typography variant='h5' fontWeight='bold'>
              {name}
            </Typography>
          </Box>
        </Box>
        <Button variant='contained' color='error' sx={{ color: "white" }}>
          Save
        </Button>
      </Box>
    </div>
  )
}
export default HeaderAllMenusPage
