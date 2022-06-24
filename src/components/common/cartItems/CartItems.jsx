import { Button, IconButton, styled, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";

const Label = styled("div")(({ theme }) => ({
   // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   display: "block",
   backgroundColor: theme.palette.cleanLight,
   ...theme.typography.body1,
   padding: theme.spacing(0),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

function CartItems({ item }) {
   const { src, title } = item;
   const [show, setShow] = useState(false);

   const handleMouseOver = () => {
      setShow(true);
   };

   const handleMouseOut = () => {
      setShow(false);
   };

   return (
      <div
         style={{ position: "relative" }}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
      >
         <img
            src={src}
            alt="img"
            loading="lazy"
            style={{
               objectFit: "cover",
               width: "100%",
               borderRadius: "16px",
               cursor: "zoom-in",
            }}
         />
         {show && (
            <>
               <Box
                  sx={{
                     position: "absolute",
                     top: 6,
                     left: 12,
                  }}
               >
                  <DropdownProfile />
               </Box>
               <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                  <Button
                     variant="contained"
                     onClick={(e) => e.stopPropagation()}
                     color="error"
                  >
                     Save
                  </Button>
               </Box>
               <Box sx={{ position: "absolute", bottom: 40, right: 12 }}>
                  <IconButton color="cleanLight">
                     <ShareIcon color="cleanLight" />
                  </IconButton>
                  <IconButton>
                     <MoreHorizIcon color="cleanLight" />
                  </IconButton>
               </Box>
            </>
         )}
         <Label>{title}</Label>
      </div>
   );
}

export default CartItems;
