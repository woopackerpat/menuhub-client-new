import { Box, Button, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../../contexts/PinContextProvider";

function BoxBoard({ name, id, restaurantId, Restaurants }) {
   const [showBoardBtn, setShowBoardBtn] = useState(false);
   const { savePinRes } = usePin();

   const getImage = Restaurants.map((el) =>
      el.Menus.map((item) => item.imageUrl)
   );
   console.log("getImage     ", getImage);

   const handleSaveRestaurant = async (e) => {
      try {
         e.stopPropagation();
         await savePinRes({ pinId: id, restaurantId: restaurantId });
         console.log(id);
         console.log(restaurantId);
      } catch (err) {
         console.log(err);
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
               <img
                  src={getImage[0]}
                  style={{ borderRadius: "10px", maxWidth: "40px" }}
                  alt="img"
               ></img>
            </Box>
            <Typography>{name}</Typography>
         </Box>
         {showBoardBtn && (
            <Button
               variant="contained"
               onClick={handleSaveRestaurant}
               color="error"
               sx={{ textTransform: "none", fontWeight: "bold" }}
            >
               Save
            </Button>
         )}
      </MenuItem>
   );
}

export default BoxBoard;
