import { Box } from "@mui/material";
import { usePin } from "../../../contexts/PinContextProvider";
import ContainerAlbumCart from "./BlockAlbum/ContainerAlbumCart";
import ContainerAllPins from "./ContainerAllPins";

function AlbumSaved() {
   const { pin } = usePin();
   return (
      <>
         <Box
            sx={{
               display: "flex",
               mt: 10,
               width: "270px",
               cursor: "pointer",
               border: "none",
               borderRadius: "16px",
               gap: 4,
               "&:hover": { filter: "grayscale(40%)" },
            }}
         >
            <Box sx={{ display: "flex" }}>
               <ContainerAllPins />
               {pin?.map((pins) => (
                  <ContainerAlbumCart
                     key={pins.id}
                     id={pins.id}
                     name={pins.name}
                  />
               ))}
            </Box>
         </Box>
      </>
   );
}

export default AlbumSaved;
