import {
   alpha,
   AppBar,
   Avatar,
   Box,
   Button,
   IconButton,
   InputBase,
   styled,
   Toolbar,
} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

function Navbar() {
   const user = false;
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="sticky" color="light">
            <Toolbar>
               <IconButton>
                  <img
                     style={{ width: 43, height: 37 }}
                     src={logo}
                     alt="logo"
                  />
               </IconButton>
               <Button variant="contained" color="dark" sx={{ color: "white" }}>
                  Home
               </Button>
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
               <IconButton size="large">
                  <AddIcon />
               </IconButton>
               <IconButton size="large">
                  <MapIcon />
               </IconButton>
               {user ? (
                  <>
                     <Box sx={{ mr: "5px" }}>
                        <Button variant="contained" color="error">
                           Log in
                        </Button>
                     </Box>
                     <Box>
                        <Button variant="contained" color="cleanLight">
                           Sign up
                        </Button>
                     </Box>
                  </>
               ) : (
                  <Box
                     sx={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                     }}
                  >
                     <Avatar sx={{ cursor: "pointer" }} />
                     <IconButton size="large">
                        <KeyboardArrowDownIcon />
                     </IconButton>
                  </Box>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
}
export default Navbar;
