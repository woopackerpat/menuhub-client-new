import { Box, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function ContainerAlbumCart({ name, id, Restaurants }) {
  //   console.log("containerAlbumCart    ", Restaurants)
  const navigate = useNavigate()

  const getImage = Restaurants.map(el => el.Menus.map(item => item.imageUrl))
  // console.log("getImage     ", getImage)
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
      onClick={() => navigate(`/myPin/${id}`)}
    >
      <Box sx={{ display: "flex", width: "270px", gap: "1px" }}>
        <Box
          sx={{
            width: "180px",
            height: "180px",
            backgroundColor: "#efefef",
            borderRadius: "16px 0 0 16px",
          }}
        >
          {getImage[0] && (
            <img
              src={getImage[0]}
              alt=''
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "16px 0 0 16px",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            width: "90px",
            height: "180px",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#efefef",
              height: "50%",
              border: "10px",
              borderRadius: "0 16px 0 0",
            }}
          >
            {getImage[1] && (
              <img
                src={getImage[1]}
                alt=''
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0 16px 0 0",
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: "#efefef",
              height: "50%",
              borderRadius: "0 0 16px 0",
            }}
          >
            {getImage[2] && (
              <img
                src={getImage[2]}
                alt=''
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0 0 16px 0",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Typography variant='h6' fontWeight='bold'>
        {name}
      </Typography>
    </Box>
  )
}
export default ContainerAlbumCart
