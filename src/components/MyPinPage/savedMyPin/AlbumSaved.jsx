import { Box, Grid } from "@mui/material";
import { usePin } from "../../../contexts/PinContextProvider";
import ContainerAlbumCart from "./BlockAlbum/ContainerAlbumCart";
import ContainerAllPins from "./ContainerAllPins";

function AlbumSaved() {
  const { pin } = usePin();
  const createdPin = pin?.slice(1, pin?.length);
  return (
    <Box
      sx={{
        mt: 10,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 270px)",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <ContainerAllPins pin={pin} />
      {createdPin?.map(pins => {
        return (
          <ContainerAlbumCart
            key={pins.id}
            id={pins.id}
            name={pins.name}
            Restaurants={pins.Restaurants}
          />
        );
      })}
    </Box>
  );
}

export default AlbumSaved;
