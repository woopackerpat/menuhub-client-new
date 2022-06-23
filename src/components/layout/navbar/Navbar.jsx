import {
   AppBar,
   Avatar,
   Box,
   Button,
   Divider,
   IconButton,
   InputBase,
   Menu,
   MenuItem,
   styled,
   Toolbar,
   Link,
   Drawer,
} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Login from "../../AuthPage/Login";
import Register from "../../AuthPage/Register";
import SideList from "./SideList";

const Search = styled("div")(({ theme }) => ({
   display: "flex",
   flex: 1,
   position: "relative",
   borderRadius: "50px",
   backgroundColor: "#efefef",
   "&:hover": {
      backgroundColor: "#e1e1e1",
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   position: "absolute",
   padding: theme.spacing(0, 2),
   height: "100%",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
}));

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

function Navbar() {
   const user = true;

   // for dropdown Menu
   const [menu, setMenu] = useState(null);

   const isMenuOpen = Boolean(menu);

   const handleProfileMenuOpen = (event) => {
      setMenu(event.currentTarget);
   };
   const handleMenuClose = () => {
      setMenu(null);
   };
   //******************************

   // for sidebar responsive
   const [openSlide, setOpenSlide] = useState(false);

   const toggleSlider = () => {
      setOpenSlide(!open);
   };

   //******************************

   // for login
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   // *****************************

   // for register

   const [openRegister, setOpenRegister] = useState(false);

   const handleClickOpenRegister = () => {
      setOpenRegister(true);
   };

   const handleCloseRegister = () => {
      setOpenRegister(false);
   };
   // *****************************

   const menuId = "primary-search-account-menu";
   const renderMenu = (
      <Menu
         anchorEl={menu}
         id={menuId}
         keepMounted
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <Link href="/addMenu" underline="none">
            <MenuItem onClick={handleMenuClose}>Create menu</MenuItem>
         </Link>
         <Link href="/myPin" underline="none">
            <MenuItem onClick={handleMenuClose}>My album</MenuItem>
         </Link>
         <Divider orientation="horizontal" />
         <Link href="/" underline="none">
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
         </Link>
      </Menu>
   );

   return (
      <>
         <AppBar position="sticky" color="light">
            <StyledToolbar>
               <Link href="/">
                  <IconButton>
                     <img
                        style={{ width: 43, height: 37 }}
                        src={logo}
                        alt="logo"
                     />
                  </IconButton>
               </Link>
               <Box
                  sx={{
                     display: { xs: "none", sm: "flex" },
                     flex: 1,
                     alignItems: "center",
                  }}
               >
                  <Link href="/">
                     <Button
                        variant="contained"
                        color="dark"
                        sx={{ color: "white" }}
                     >
                        Home
                     </Button>
                  </Link>
                  <Search>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search ..."
                        inputProps={{ "aria-label": "search" }}
                        sx={{ display: "flex", flex: 1 }}
                     />
                  </Search>

                  <Link href="/draftMenu">
                     <IconButton size="large">
                        <AddIcon />
                     </IconButton>
                  </Link>
                  <Link href="/map">
                     <IconButton size="large">
                        <MapIcon />
                     </IconButton>
                  </Link>
               </Box>
               {user ? (
                  <>
                     <Box
                        sx={{
                           display: { xs: "none", sm: "flex" },
                        }}
                     >
                        <Button
                           variant="contained"
                           color="error"
                           sx={{ mr: "10px" }}
                           onClick={handleClickOpen}
                        >
                           Log in
                        </Button>
                        <Button
                           variant="contained"
                           color="cleanLight"
                           onClick={handleClickOpenRegister}
                        >
                           Sign up
                        </Button>
                     </Box>
                  </>
               ) : (
                  <Box
                     sx={{
                        display: { xs: "none", sm: "flex" },
                        justifyItems: "center",
                        alignItems: "center",
                     }}
                  >
                     <Link href="/myPin">
                        <IconButton size="small">
                           <Avatar sx={{ cursor: "pointer" }} />
                        </IconButton>
                     </Link>
                     <IconButton
                        size="large"
                        aria-controls={menuId}
                        onClick={handleProfileMenuOpen}
                     >
                        <KeyboardArrowDownIcon />
                     </IconButton>
                  </Box>
               )}
               <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                  <IconButton size="large" onClick={toggleSlider}>
                     <MenuIcon />
                  </IconButton>
                  <Drawer
                     openSlide={openSlide}
                     anchor="right"
                     onClose={toggleSlider}
                  >
                     <SideList />
                  </Drawer>
               </Box>
            </StyledToolbar>
         </AppBar>
         <SideList />
         <Login handleClose={handleClose} open={open} />
         <Register
            handleCloseRegister={handleCloseRegister}
            openRegister={openRegister}
         />
         {renderMenu}
      </>
   );
}
export default Navbar;
