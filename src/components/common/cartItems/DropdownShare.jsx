import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useState } from "react";
import {
   FacebookShareButton,
   LineShareButton,
   TwitterShareButton,
   EmailShareButton,
} from "react-share";
import { FacebookIcon, LineIcon, TwitterIcon, EmailIcon } from "react-share";

function DropdownShare() {
   const [showShare, setShowShare] = useState(null);

   const isMenuShare = Boolean(showShare);

   const handleShareDropdown = (event) => {
      setShowShare(event.currentTarget);
   };
   const handleMenuCloseShare = () => {
      setShowShare(null);
   };

   const dropId = "drop-share";

   const renderDropShareMenu = (
      <Menu
         anchorEl={showShare}
         id={dropId}
         keepMounted
         open={isMenuShare}
         onClose={handleMenuCloseShare}
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <Typography variant="body1" align="center" fontWeight="bold">
            Send this pin
         </Typography>
         <Box
            sx={{
               display: "flex",
               gap: 2,
               alignItems: "center",
               justifyContent: "center",
               p: 2,
            }}
            onClick={handleMenuCloseShare}
         >
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <FacebookShareButton url="https://www.youtube.com/watch?v=2BnTYEafRQc">
                  <FacebookIcon round={true} size={48}></FacebookIcon>
               </FacebookShareButton>
               <Typography variant="body2">Facebook</Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <LineShareButton url="https://www.youtube.com/watch?v=2BnTYEafRQc">
                  <LineIcon round={true} size={48}></LineIcon>
               </LineShareButton>
               <Typography variant="body2">Line</Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <TwitterShareButton url="https://www.youtube.com/watch?v=2BnTYEafRQc">
                  <TwitterIcon round={true} size={48}></TwitterIcon>
               </TwitterShareButton>
               <Typography variant="body2">Twitter</Typography>
            </Box>
         </Box>
         <Box sx={{ display: "flex", gap: 2, alignItems: "center", p: 2 }}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <EmailShareButton url="https://www.youtube.com/watch?v=2BnTYEafRQc">
                  <EmailIcon round={true} size={48}></EmailIcon>
               </EmailShareButton>
               <Typography variant="body2">Email</Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <IconButton sx={{ mt: 2 }}>
                  <FileCopyIcon fontSize="60px" />
               </IconButton>
               <Typography variant="body2">Copy Link</Typography>
            </Box>
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
            <ShareIcon color="dark" />
         </IconButton>
         {renderDropShareMenu}
      </>
   );
}

export default DropdownShare;
