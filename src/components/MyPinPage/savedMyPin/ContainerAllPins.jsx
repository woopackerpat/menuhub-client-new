import { Box, ImageList, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ItemCardSaved from "./ItemCardSaved"

function ContainerAllPins({ pin }) {
  const getImage = pin?.map(el =>
    el.Restaurants?.map(el => el.Menus?.map(el => el.imageUrl))
  )
  console.log(pin)

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
          <ItemCardSaved src={getImage[0]} size='100%' />
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
          <ItemCardSaved src={getImage[1]} size='100%' />
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
          <ItemCardSaved src={getImage[2]} size='100%' />
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
          <ItemCardSaved src={getImage[3]} size='100%' />
        </Box>
      </Box>
      <Typography variant='h6' fontWeight='bold'>
        All pins
      </Typography>
    </Box>
  )
}

export default ContainerAllPins
