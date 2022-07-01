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
               cursor: "pointer",
               border: "none",
               borderRadius: "16px",
               gap: 4,
               "&:hover": { filter: "grayscale(40%)" },
            }}
         >
            <Box
               sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <ContainerAllPins />
               {pin?.map((pins) => {
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
         </Box>
      </>
   );
}

export default AlbumSaved;
