import { Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ContainerMyAllPins from "../components/MyPinPage/ContainerMyAllPins";
import ContainerMyPinPage from "../components/MyPinPage/ContainerMyPinPage";
import ContainerPinId from "../components/MyPinPage/ContainerPinId";
import ContainerEditProfile from "../components/MyPinPage/EditProfilePage/ContainerEditProfile";

function MyPinPage() {
  const { pathname } = useLocation();
  const { albumId } = useParams();
  return (
    <Box
    sx={{
      // pt: "20px",
      px: {
        xs: "0",
        xl: "70px",
        lg: "40px",
        md: "40px",
        sm: "10px",
      },
    }}
    >
      {pathname === "/myPin" && <ContainerMyPinPage />}
      {pathname === "/myPin/allPins" && <ContainerMyAllPins />}
      {pathname === "/myPin/created-pin" && <ContainerMyPinPage />}
      {pathname === "/myPin/edit-profile" && <ContainerEditProfile />}
      {pathname === `/myPin/${albumId}` && <ContainerPinId id={albumId} />}
    </Box>
  );
}
export default MyPinPage;
