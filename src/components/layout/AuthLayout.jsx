import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

function AuthLayout() {
   return (
      <div>
         <div>
            <Navbar />
            <Outlet />
         </div>
         {/* <Footer /> */}
      </div>
   );
}
export default AuthLayout;
