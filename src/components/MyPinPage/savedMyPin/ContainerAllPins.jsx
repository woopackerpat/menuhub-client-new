import { Box, ImageList, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ItemCardSaved from "./ItemCardSaved"

function ContainerAllPins({ pin }) {
  const imgList = cardSaved.slice(0, 4).map(el => el.src)
  console.log("imgList: ", imgList)
  const getImage = pin?.map(el =>
    el.Restaurants?.map(el => el.Menus?.map(el => el.imageUrl))
  )

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

const cardSaved = [
  {
    id: "1",
    title: "ejwnev",
    src: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "2",
    title: "asdsavav",
    src: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "3",
    title: "afnlkm",
    src: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "4",
    title: "vqfsa",
    src: "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "5",
    title: "zxca",
    src: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "6",
    title: "asdsdf",
    src: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
]
