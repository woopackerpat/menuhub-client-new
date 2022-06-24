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
import AddIcon from "@mui/icons-material/Add";

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
                  <HistoryIcon fontSize="large" />
               </Box>
               <Typography>Profile</Typography>
            </Box>
         </MenuItem>
         <MenuItem disabled>
            <Typography variant="caption">Save to board</Typography>
         </MenuItem>
         <MenuItem>
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
                  <img src="" alt="img"></img>
               </Box>
               <Typography>Board Name</Typography>
            </Box>
         </MenuItem>

         <Divider orientation="horizontal" />
         <MenuItem>
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
         {renderMenuDropdown}
      </>
   );
}
export default DropdownProfile;
