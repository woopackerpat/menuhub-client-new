import { Box, ImageList, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ItemCardSaved from "./ItemCardSaved"

function ContainerAllPins({ pin }) {
  const getImage = pin?.slice(0, 4)

  const img1 = getImage[0]?.Restaurants[0]?.Menus[0]?.imageUrl
  const img2 = getImage[1]?.Restaurants[0]?.Menus[0]?.imageUrl
  const img3 = getImage[2]?.Restaurants[0]?.Menus[0]?.imageUrl
  const img4 = getImage[3]?.Restaurants[0]?.Menus[0]?.imageUrl

  const navigate = useNavigate()
  return (
    <Box onClick={() => navigate("/myPin/allPins")}>
      <Box
        sx={{
          position: "relative",
          width: "270px",
          height: "180px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#efefef",
            width: "132px",
            height: "180px",
            borderRadius: "16px",
            zIndex: "30",
            border: "1px solid #fff",
          }}
        >
          <ItemCardSaved src={img1} size='100%' />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "46px",
            backgroundColor: "#efefef",
            width: "132px",
            height: "180px",
            borderRadius: "16px",
            zIndex: "20",
            border: "1px solid #fff",
          }}
        >
          <ItemCardSaved src={img2} size='100%' />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "92px",
            backgroundColor: "#efefef",
            width: "132px",
            height: "180px",
            borderRadius: "16px",
            zIndex: "10",
            border: "1px solid #fff",
          }}
        >
          <ItemCardSaved src={img3} size='100%' />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "138px",
            backgroundColor: "#efefef",
            width: "132px",
            height: "180px",
            borderRadius: "16px",
            border: "1px solid #fff",
          }}
        >
          <ItemCardSaved src={img4} size='100%' />
        </Box>
      </Box>
      <Typography variant='h6' fontWeight='bold'>
        All pins
      </Typography>
    </Box>
  )
}

export default ContainerAllPins
