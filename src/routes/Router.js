import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import AllMenusPage from "../pages/AllMenusPage";
import SingleMenuPage from "../pages/SingleMenuPage";
import DraftMenuPage from "../pages/DraftMenu";
import AddMenuPage from "../pages/AddMenuPage";
import MyPinPage from "../pages/MyPinPage";
import MapPage from "../pages/MapPage";
import Test from "../pages/Test";
import Test2 from "../pages/Test2";
import AuthPage from "../pages/AuthPage";
import AuthRegister from "../pages/AuthRegister";
import MapContextProvider from "../contexts/MapContextProvider";

function Router() {
   return (
      <Routes>
         <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="allMenus" element={<AllMenusPage />} />
            <Route path="singleMenu" element={<SingleMenuPage />} />
            <Route path="draftMenu" element={<DraftMenuPage />} />
            <Route path="addMenu" element={<AddMenuPage />} />
            <Route path="myPin" element={<MyPinPage />}>
               <Route path="edit-profile" element={<MyPinPage />} />
               <Route path="created-pin" element={<MyPinPage />} />
               <Route path=":albumId" element={<MyPinPage />} />
            </Route>
            <Route path="map" element={<MapPage />} />
            <Route path="test" element={<Test />} />
            <Route path="test2" element={<Test2 />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="register" element={<AuthRegister />} />
         </Route>
      </Routes>
   );
}

export default Router;
