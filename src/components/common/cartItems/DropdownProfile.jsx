import {
   Box,
   Button,
   Divider,
   IconButton,
   Menu,
   MenuItem,
   Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import SearchBar from "../SearchBar";
import { usePin } from "../../../contexts/PinContextProvider";
import ModalCreatePin from "./ModalCreatePin";
import BoxBoard from "./BoxBoard";

function DropdownProfile({ id }) {
   // console.log(item, "post");
   const { pin } = usePin();
   const [showDrop, setShowDrop] = useState(null);
   const [showProfileBtn, setShowProfileBtn] = useState(false);

   //    const getImage = Restaurants.map((el) =>
   //    el.Menus.map((item) => item.imageUrl)
   // );

   //Modal Create
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const isMenuDrop = Boolean(showDrop);

   const handleProfileDropdown = (event) => {
      setShowDrop(event.currentTarget);
   };
   const handleMenuClose = () => {
      setShowDrop(null);
   };

   // ********************************

   const dropId = "drop-profile";
   const renderMenuDropdown = (
      <Menu
         anchorEl={showDrop}
         id={dropId}
         keepMounted
         open={isMenuDrop}
         onClose={handleMenuClose}
      >
         <Typography variant="h6" align="center">
            Save
         </Typography>
         <SearchBar />
         <MenuItem disabled>
            <Typography variant="caption">
               Quick save and organize later
            </Typography>
         </MenuItem>
         <MenuItem
            sx={{
               display: "flex",
               justifyContent: "space-between",
               width: "20rem",
               borderRadius: "10px",
               m: "10px",
            }}
            onMouseOver={() => setShowProfileBtn(true)}
            onMouseOut={() => setShowProfileBtn(false)}
            onClick={(e) => e.stopPropagation()}
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
                     backgroundColor: showProfileBtn ? "#ffffff" : "#efefef",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: "10px",
                  }}
               >
                  <HistoryIcon fontSize="large" />
               </Box>
               <Typography>Profile</Typography>
            </Box>
            {showProfileBtn && (
               <Button
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
               >
                  Save
               </Button>
            )}
         </MenuItem>
         <MenuItem disabled>
            <Typography variant="caption">Save to board</Typography>
         </MenuItem>
         <Box sx={{ overflowY: "auto", maxHeight: "100px" }}>
            {pin?.map((pins) => (
               <BoxBoard
                  Restaurants={pins.Restaurants}
                  key={pins.id}
                  name={pins.name}
                  id={pins.id}
                  restaurantId={id}
               />
            ))}
         </Box>

         <Divider orientation="horizontal" />
         <MenuItem>
            <Box
               sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  m: "10px",
                  border: "none",
               }}
               onClick={handleOpen}
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
                  <AddIcon fontSize="large" />
               </Box>
               <Typography>Create board</Typography>
            </Box>
         </MenuItem>
      </Menu>
   );
   return (
      <>
         <IconButton
            size="large"
            aria-controls={dropId}
            onClick={handleProfileDropdown}
         >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
               profile
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
         </IconButton>
         <ModalCreatePin open={open} handleClose={handleClose} />
         {renderMenuDropdown}
      </>
   );
}
export default DropdownProfile;
