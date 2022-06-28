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
} from '@mui/material'
import logo from '../../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import MapIcon from '@mui/icons-material/Map'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import Login from '../../AuthPage/Login'
import Register from '../../AuthPage/Register'
import SidebarMobile from './SidebarMobile'
import SearchBar from '../../common/SearchBar'
import { useMap } from '../../../contexts/MapContextProvider'
import LocationSearch from '../../HomePage/LocationSearch'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

function Navbar() {
<<<<<<< HEAD
   // API
   const user = false;
=======
  // API
  const user = true
>>>>>>> feat-single-menu

  // for dropdown Menu
  const [menu, setMenu] = useState(null)

  const isMenuOpen = Boolean(menu)

  const handleProfileMenuOpen = event => {
    setMenu(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenu(null)
  }

  //******************************

  // for login
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // *****************************

  // for register

  const [openRegister, setOpenRegister] = useState(false)

  const handleClickOpenRegister = () => {
    setOpenRegister(true)
  }

  const handleCloseRegister = () => {
    setOpenRegister(false)
  }
  // *****************************

  // for open map
  const { handleOpenSearch } = useMap()

  const menuId = 'primary-search-account-menu'
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
  )

  return (
    <>
      <AppBar position="sticky" color="light">
        <StyledToolbar>
          <Link href="/">
            <IconButton>
              <img style={{ width: 43, height: 37 }} src={logo} alt="logo" />
            </IconButton>
          </Link>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Link href="/">
              <Button
                variant="contained"
                color="dark"
                sx={{ color: 'white', fontWeight: 'bold' }}
              >
                Home
              </Button>
            </Link>

            <SearchBar />

            <Link href="/draftMenu">
              <IconButton size="large">
                <AddIcon />
              </IconButton>
            </Link>
            <Link onClick={() => handleOpenSearch()}>
              <IconButton size="large">
                <MapIcon />
              </IconButton>
            </Link>
          </Box>
          {!user ? (
            <>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mr: '10px', fontWeight: 'bold' }}
                  onClick={handleClickOpen}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  color="cleanLight"
                  onClick={handleClickOpenRegister}
                  sx={{ fontWeight: 'bold' }}
                >
                  Sign up
                </Button>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              <Link href="/myPin">
                <IconButton size="small">
                  <Avatar sx={{ cursor: 'pointer' }} />
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
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SidebarMobile />
          </Box>
        </StyledToolbar>
      </AppBar>
      <Login handleClose={handleClose} open={open} />
      <Register
        handleCloseRegister={handleCloseRegister}
        openRegister={openRegister}
      />
      <LocationSearch />
      {renderMenu}
    </>
  )
}
export default Navbar
