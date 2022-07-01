import { useLocation } from "react-router-dom";
import ContainerMyPinPage from "../components/MyPinPage/ContainerMyPinPage";
import ContainerPinId from "../components/MyPinPage/ContainerPinId";
import ContainerEditProfile from "../components/MyPinPage/EditProfilePage/ContainerEditProfile";
import { usePin } from "../contexts/PinContextProvider";

function MyPinPage() {
   const { pathname } = useLocation();
   const { pin } = usePin();
   const { id } = pin;
   return (
      <>
         {pathname === "/myPin" && <ContainerMyPinPage />}
         {pathname === "/myPin/edit-profile" && <ContainerEditProfile />}
         {pathname === `/myPin/${id}` && <ContainerPinId />}
      </>
   );
}
export default MyPinPage;
