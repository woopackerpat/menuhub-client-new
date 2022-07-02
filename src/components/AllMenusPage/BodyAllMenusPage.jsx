import { Box, CssBaseline } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import HeaderAllMenusPage from "./HeaderAllMenusPage"
import MainContentAllMenusPage from "./MainContentAllMenusPage"

function BodyAllMenusPage() {
  const [menus, setMenus] = useState([])

  const { restaurantId } = useParams()

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        if (restaurantId) {
          const res = await axios.get("/restaurant/menuall/" + restaurantId)
          console.log(res.data)
          setMenus(res.data.Menus)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchMenus()
  }, [])
  console.log({ menus })
  console.log(restaurantId)
  return (
    <>
      <CssBaseline>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <HeaderAllMenusPage restaurantId={restaurantId} menus={menus} />
          <MainContentAllMenusPage restaurantId={restaurantId} menus={menus} />
        </Box>
      </CssBaseline>
    </>
  )
}

export default BodyAllMenusPage
