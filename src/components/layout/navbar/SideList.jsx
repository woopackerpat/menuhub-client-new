import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
import {
   Avatar,
   Box,
   Divider,
   List,
   ListItemIcon,
   ListItemText,
} from "@mui/material";
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
   {
      listIcon: <LogoutIcon />,
      listText: "Log out",
   },
];

const MenuSideBarContainer = styled("div")(({ theme }) => ({
   width: "250px",
   backgroundColor: "#efefef",
   height: "100%",
   padding: "5px",
   boxShadow: "5px 5px 5px 5px #888888",
}));

const ListItem = styled("div")(({ theme }) => ({
   color: "dark",
}));

function SideList({ openSlide, toggleSlider }) {
   return (
      <Box>
         <MenuSideBarContainer>
            <Avatar
               sx={{ margin: "0.5rem auto", width: "50px", height: "50px" }}
               alt="profilePic"
            />
            <Divider />
            <List>
               {listItems.map((item, idx) => (
                  <ListItem
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: "10px",
                        ml: "10px",
                     }}
                     key={idx}
                  >
                     <ListItemIcon>{item.listIcon}</ListItemIcon>
                     <ListItemText primary={item.listText} />
                  </ListItem>
               ))}
            </List>
         </MenuSideBarContainer>
      </Box>
   );
}
export default SideList;
