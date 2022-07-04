import { Box, CssBaseline } from "@mui/material";
import { useLocation } from "react-router-dom";
import AlbumCreated from "./createdMyPin/AlbumCreated";
import HeaderMyPinPage from "./HeaderMyPinPage";
import AlbumSaved from "./savedMyPin/AlbumSaved";

function ContainerMyPinPage() {
  const { pathname } = useLocation();
  return (
    <>
      <CssBaseline>
        <Box sx={{ marginY: "100px" }}>
          <HeaderMyPinPage />
          {pathname === "/myPin" && <AlbumSaved />}
          {pathname === "/myPin/created-pin" && <AlbumCreated />}
        </Box>
      </CssBaseline>
    </>
  );
}
export default ContainerMyPinPage;
