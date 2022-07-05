import {
   Backdrop,
   Box,
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
import { LoadingButton } from "@mui/lab";
import SearchPin from "./SearchPin";

function DropdownProfile({ restaurantId, color }) {
   const { pin, savePinRes } = usePin();
   const [showDrop, setShowDrop] = useState(null);
   const [showProfileBtn, setShowProfileBtn] = useState(false);
   const [loading, setLoading] = useState(false);

   const profilePin = pin?.slice(0, 1).map((el) => el.id);
   const createdPin = pin?.slice(1, pin?.length);

   const [searchPin, setSearchPin] = useState(createdPin || []);

   const pinId = profilePin[0];
   //   console.log(pinId);
   //   console.log(createdPin);

   //Modal Create
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
      handleMenuClose();
   };
   const handleClose = () => setOpen(false);

   const isMenuDrop = Boolean(showDrop);

   const handleProfileDropdown = (event) => {
      setShowDrop(event.currentTarget);
   };
   const handleMenuClose = () => {
      setShowDrop(null);
   };

   const handleClickSave = async () => {
      try {
         setLoading(true);
         await savePinRes({ pinId, restaurantId });
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false);
      }
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
         {/* search ... */}

         <SearchPin
            searchPin={searchPin}
            setSearchPin={setSearchPin}
            createdPin={createdPin}
         />

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
               <LoadingButton
                  loading={loading}
                  onClick={handleClickSave}
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
               >
                  Save
               </LoadingButton>
            )}
         </MenuItem>
         <MenuItem disabled>
            <Typography variant="caption">Save to board</Typography>
         </MenuItem>
         <Box sx={{ overflowY: "auto", maxHeight: "100px" }}>
            {searchPin?.map((pins) => {
               return (
                  <BoxBoard
                     Restaurants={pins.Restaurants}
                     key={pins.id}
                     name={pins.name}
                     pinId={pins.id}
                     restaurantId={restaurantId}
                  />
               );
            })}
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
            <Typography
               variant="subtitle1"
               sx={{ color: color ? color : "white" }}
            >
               Profile
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: color ? color : "white" }} />
         </IconButton>
         <ModalCreatePin open={open} handleClose={handleClose} />
         {renderMenuDropdown}
      </>
   );
}
export default DropdownProfile;
