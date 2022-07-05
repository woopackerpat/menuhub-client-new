import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ProfileAvatar from "../../common/ProfileAvatar";

function SidebarMobile() {
   const [state, setState] = React.useState({
      right: false,
   });

   const toggleDrawer = (anchor, open) => (event) => {
      if (
         event &&
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const listItems = [
      {
         listIcon: <HomeIcon />,
         listText: "Home",
      },
      {
         listIcon: <AddIcon />,
         listText: "Create menu",
      },
      {
         listIcon: <MapIcon />,
         listText: "Map",
      },
   ];

   const listSetting = [
      {
         listIcon: <LogoutIcon />,
         listText: "Log out",
      },
   ];

   const hamBerger = [
      {
         listIcon: <MenuIcon />,
         listText: "right",
      },
   ];

   const list = (anchor) => (
      <Box
         sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <ProfileAvatar margin="0.5rem auto" width="50px" height="50px" />
         {/* <Avatar
            sx={{ margin: "0.5rem auto", width: "100px", height: "100px" }}
            alt="profilePic"
         /> */}
         <Divider />
         <List>
            {listItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>{item.listIcon}</ListItemIcon>
                     <ListItemText primary={item.listText} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {listSetting.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>{item.listIcon}</ListItemIcon>
                     <ListItemText primary={item.listText} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <List>
         {hamBerger.map((anchor) => (
            <ListItem key={anchor}>
               <ListItemButton onClick={toggleDrawer(anchor, true)}>
                  <ListItemIcon>{anchor.listIcon}</ListItemIcon>
               </ListItemButton>
               <SwipeableDrawer
                  anchor={anchor.listText}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
               >
                  {list(anchor.listText)}
               </SwipeableDrawer>
            </ListItem>
         ))}
      </List>
   );
}

export default SidebarMobile;
