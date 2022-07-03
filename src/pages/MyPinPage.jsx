import { useLocation, useParams } from "react-router-dom"
import ContainerMyAllPins from "../components/MyPinPage/ContainerMyAllPins"
import ContainerMyPinPage from "../components/MyPinPage/ContainerMyPinPage"
import ContainerPinId from "../components/MyPinPage/ContainerPinId"
import ContainerEditProfile from "../components/MyPinPage/EditProfilePage/ContainerEditProfile"

function MyPinPage() {
  const { pathname } = useLocation()
  const { albumId } = useParams()
  return (
    <>
      {pathname === "/myPin" && <ContainerMyPinPage />}
      {pathname === "/myPin/allPins" && <ContainerMyAllPins />}
      {pathname === "/myPin/created-pin" && <ContainerMyPinPage />}
      {pathname === "/myPin/edit-profile" && <ContainerEditProfile />}
      {pathname === `/myPin/${albumId}` && <ContainerPinId id={albumId} />}
    </>
  )
}
export default MyPinPage
