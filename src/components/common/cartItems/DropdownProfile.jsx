import {
   Box,
   Divider,
   IconButton,
   Menu,
   MenuItem,
   Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HistoryIcon from "@mui/icons-material/History";

import { useState } from "react";
import SearchBar from "../SearchBar";

function DropdownProfile() {
   const [showDrop, setShowDrop] = useState(null);

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
         <MenuItem>
            <Box sx={{ display: "flex", gap: 2 }}>
               <HistoryIcon />
               <Typography>Profile</Typography>
            </Box>
         </MenuItem>
         <MenuItem disabled>
            <Typography variant="caption">Save to board</Typography>
         </MenuItem>
         <MenuItem>
            <Box sx={{ display: "flex", gap: 2 }}>
               <HistoryIcon />
               <Typography>Board Name</Typography>
            </Box>
         </MenuItem>
         <MenuItem onClick={handleMenuClose}>Create menu</MenuItem>
         <MenuItem onClick={handleMenuClose}>My album</MenuItem>
         <Divider orientation="horizontal" />
         <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
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
         {renderMenuDropdown}
      </>
   );
}
export default DropdownProfile;
