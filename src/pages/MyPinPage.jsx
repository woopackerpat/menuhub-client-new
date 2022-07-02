import { useLocation, useParams } from "react-router-dom"
import ContainerMyPinPage from "../components/MyPinPage/ContainerMyPinPage"
import ContainerPinId from "../components/MyPinPage/ContainerPinId"
import ContainerEditProfile from "../components/MyPinPage/EditProfilePage/ContainerEditProfile"

function MyPinPage() {
  const { pathname } = useLocation()
  const { albumId } = useParams()
  console.log(albumId)
  return (
    <>
      {pathname === "/myPin" && <ContainerMyPinPage />}
      {pathname === "/myPin/created-pin" && <ContainerMyPinPage />}
      {pathname === "/myPin/edit-profile" && <ContainerEditProfile />}
      {pathname === `/myPin/${albumId}` && <ContainerPinId id={albumId} />}
    </>
  )
}
export default MyPinPage
