import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Link,
} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Login from "../../AuthPage/Login";
import Register from "../../AuthPage/Register";
import SidebarMobile from "./SidebarMobile";
import SearchBar from "../../common/SearchBar";
import { useMap } from "../../../contexts/MapContextProvider";
import LocationSearch from "../../HomePage/LocationSearch";
import { useAuth } from "../../../contexts/AuthContextProvider";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Navbar() {
  const { logout } = useAuth();
  const [type, setType] = useState("login");

  // API
  const { user } = useAuth();
  const { profilePicUrl } = user;

  // for dropdown Menu
  const [menu, setMenu] = useState(null);

  const isMenuOpen = Boolean(menu);

  const handleProfileMenuOpen = (event) => {
    setMenu(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenu(null);
  };

  // *****************************

  // for open map
  const { handleOpenSearch } = useMap();

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={menu}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="/draftMenu" underline="none">
        <MenuItem onClick={handleMenuClose}>Create menu</MenuItem>
      </Link>
      <Link href="/myPin" underline="none">
        <MenuItem onClick={handleMenuClose}>My album</MenuItem>
      </Link>
      <Divider orientation="horizontal" />
      <Link href="/" underline="none">
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="light"
        sx={{ height: "80px", display: "flex", justifyContent: "center" }}
        className = "nav-shadow"
      >
        <StyledToolbar>
          <Link href="/">
            <IconButton>
              <img style={{ width: 43, height: 37 }} src={logo} alt="logo" />
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
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  lineHeight: "35px",
                  borderRadius: "24px",
                  textTransform: 'none'
                }}
                disableElevation
                
              >
                Home
              </Button>
            </Link>

            <SearchBar />

            <Link href="/draftMenu">
              <IconButton size="large">
                <AddIcon sx = {{fontSize: "28px"}}/>
              </IconButton>
            </Link>
            <Link onClick={() => handleOpenSearch()}>
              <IconButton size="large">
                <MapIcon sx = {{fontSize: "28px"}}/>
              </IconButton>
            </Link>
          </Box>
          {!user ? (
            <>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <Login
                  title="login"
                  variant="contained"
                  color="error"
                  sx={{ mr: "10px", fontWeight: "bold" }}
                />

                <Register
                  variant="contained"
                  color="cleanLight"
                  sx={{ fontWeight: "bold" }}
                  title="Sign up"
                />
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
                  <Avatar sx={{ cursor: "pointer", width: 32, height: 32 }} src={profilePicUrl} />
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
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SidebarMobile />
          </Box>
        </StyledToolbar>
      </AppBar>

      <LocationSearch />
      {renderMenu}
    </>
  );
}
export default Navbar;
