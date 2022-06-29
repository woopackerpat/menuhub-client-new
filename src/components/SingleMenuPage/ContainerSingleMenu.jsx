import { Box } from "@mui/material"
import HeaderAllMenusPage from "../AllMenusPage/HeaderAllMenusPage"
import MenuCardContainer from "./CardSingleMenu/MenuCardContainer"

function ContainerSingleMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: '20px',
      }}
    >
      <HeaderAllMenusPage />
      <MenuCardContainer />
    </Box>
  )
}

export default ContainerSingleMenu
