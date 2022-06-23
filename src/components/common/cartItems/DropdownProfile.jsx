import { Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { Box } from "@mui/system";

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
