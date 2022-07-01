import { Box, Grid } from "@mui/material"
import { usePin } from "../../../contexts/PinContextProvider"
import ContainerAlbumCart from "./BlockAlbum/ContainerAlbumCart"
import ContainerAllPins from "./ContainerAllPins"

function AlbumSaved() {
  const { pin } = usePin()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <ContainerAllPins pin={pin} />
        {pin?.map(pins => {
          return (
            <ContainerAlbumCart
              key={pins.id}
              id={pins.id}
              name={pins.name}
              Restaurants={pins.Restaurants}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default AlbumSaved
