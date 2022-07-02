import { Box, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { usePin } from "../../../../contexts/PinContextProvider"

function ContainerAlbumCart({ name, id, Restaurants }) {
  const { fetchPinById } = usePin()
  const navigate = useNavigate()

  const getImage = Restaurants?.slice(0, 3)
  const img1 = getImage[0]?.Menus[0]?.imageUrl
  const img2 = getImage[1]?.Menus[0]?.imageUrl
  const img3 = getImage[2]?.Menus[0]?.imageUrl

  const handleClickPin = async () => {
    await fetchPinById(id)
    navigate(`/myPin/${id}`)
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
      onClick={handleClickPin}
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
          {img1 && (
            <img
              src={img1}
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
            {img2 && (
              <img
                src={img2}
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
            {img3 && (
              <img
                src={img3}
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
