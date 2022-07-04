import { LoadingButton } from "@mui/lab";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";

function BoxBoard({ name, pinId, restaurantId, Restaurants }) {
   const [showBoardBtn, setShowBoardBtn] = useState(false);
   const { savePinRes } = usePin();
   const [loading, setLoading] = useState(false);

   const getImage = Restaurants?.map((el) =>
      el?.Menus.map((item) => item.imageUrl)
   );

   const handleSaveRestaurant = async (e) => {
      try {
         console.log(restaurantId, name, pinId);
         e.stopPropagation();
         setLoading(true);
         console.log(pinId, "pinId");
         console.log(restaurantId, "resId");
         await savePinRes({ pinId: pinId, restaurantId: restaurantId });
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false);
      }
   };
   return (
      <MenuItem
         sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "20rem",
            borderRadius: "10px",
            m: "10px",
         }}
         onMouseOver={() => setShowBoardBtn(true)}
         onMouseOut={() => setShowBoardBtn(false)}
      >
         <Box
            sx={{
               display: "flex",
               gap: 2,
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Box
               sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#efefef",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
               }}
            >
               {getImage[0]?.length > 0 ? (
                  <img
                     src={getImage[0]}
                     style={{ borderRadius: "10px", maxWidth: "40px" }}
                     alt="img"
                  />
               ) : (
                  ""
               )}
            </Box>
            <Typography>{name}</Typography>
         </Box>
         {showBoardBtn && (
            <LoadingButton
               loading={loading}
               variant="contained"
               onClick={handleSaveRestaurant}
               color="error"
               sx={{ textTransform: "none", fontWeight: "bold" }}
            >
               Save
            </LoadingButton>
         )}
      </MenuItem>
   );
}

export default BoxBoard;
