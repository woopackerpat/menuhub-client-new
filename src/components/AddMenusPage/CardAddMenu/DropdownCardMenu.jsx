import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";

function DropdownCardMenu() {
   const [showDrop, setShowDrop] = useState(null);

   const isSettingDrop = Boolean(showDrop);

   const handleSettingDropdown = (event) => {
      setShowDrop(event.currentTarget);
   };
   const handleMenuClose = () => {
      setShowDrop(null);
   };

   // ********************************

   const dropId = "drop-profile";
   const renderSettingDropdown = (
      <Menu
         anchorEl={showDrop}
         id={dropId}
         keepMounted
         open={isSettingDrop}
         onClose={handleMenuClose}
      >
         <MenuItem>
            <Typography>Delete</Typography>
         </MenuItem>
         <MenuItem>
            <Typography>Duplicate</Typography>
         </MenuItem>
      </Menu>
   );
   return (
      <>
         <IconButton
            size="large"
            aria-controls={dropId}
            onClick={handleSettingDropdown}
         >
            <MoreHorizIcon fontSize="large" />
         </IconButton>
         {renderSettingDropdown}
      </>
   );
}
export default DropdownCardMenu;
