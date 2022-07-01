import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";

function DropdownCommentEdit({ handleDelete, menuId, handleInsert, idx }) {
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
         <MenuItem onClick={() => handleDelete(menuId)}>
            <Typography>Edit</Typography>
         </MenuItem>
         <MenuItem onClick={() => handleInsert(idx)}>
            <Typography>Delete</Typography>
         </MenuItem>
      </Menu>
   );
   return (
      <>
         <IconButton aria-controls={dropId} onClick={handleSettingDropdown}>
            <MoreHorizIcon fontSize="small" />
         </IconButton>
         {renderSettingDropdown}
      </>
   );
}
export default DropdownCommentEdit;
