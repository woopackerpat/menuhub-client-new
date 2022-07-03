import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModalReportPin from "./ModalReportPin";

function DropdownReport() {
   const [showReport, setShowReport] = useState(null);

   const isMenuReport = Boolean(showReport);

   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
      handleMenuCloseReport();
   };
   const handleClose = () => setOpen(false);

   const handleShareDropdown = (event) => {
      setShowReport(event.currentTarget);
   };
   const handleMenuCloseReport = () => {
      setShowReport(null);
   };

   const dropId = "drop-share";

   const renderDropReport = (
      <Menu
         anchorEl={showReport}
         id={dropId}
         keepMounted
         open={isMenuReport}
         onClose={handleMenuCloseReport}
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: 2,
               p: 2,
            }}
         >
            <Typography variant="body1" align="center">
               This Pin was inspired by your recent activity
            </Typography>
            <Typography
               fontWeight="bold"
               sx={{
                  "&:hover": { backgroundColor: "#efefef" },
                  p: 2,
                  cursor: "pointer",
                  borderRadius: "16px",
                  backgroundColor: "#f2f2f2",
               }}
               onClick={handleOpen}
            >
               Report Pin
            </Typography>
         </Box>
      </Menu>
   );

   return (
      <>
         <IconButton
            sx={{
               backgroundColor: "#f0f0f0",
               opacity: [0.9, 0.8, 0.7],
               "&:hover": { backgroundColor: "white", opacity: 1 },
            }}
            aria-controls={dropId}
            onClick={handleShareDropdown}
         >
            <MoreHorizIcon color="dark" />
         </IconButton>
         <ModalReportPin open={open} handleClose={handleClose} />
         {renderDropReport}
      </>
   );
}

export default DropdownReport;
