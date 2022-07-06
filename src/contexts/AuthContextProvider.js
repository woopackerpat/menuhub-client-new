import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
   getAccessToken,
   removeAccessToken,
   setAccessToken,
} from "../services/localStorage";
import { uploadImage } from "../services/uploadImage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
   const [user, setUser] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const fetchMe = async () => {
      try {
         const token = getAccessToken();

         if (token) {
            const resMe = await axios.get("user/me");
            setUser(resMe.data.user);
         }
      } catch (err) {
         removeAccessToken();
         navigate("/");
      }
   };

   useEffect(() => {
      fetchMe();
   }, []);

   const register = async (input) => {
      // try {
         await axios.post("/auth/register", input);
      // } catch (err) {
      //    console.log(err);
      // }
   };

   const login = async (email, password) => {
      const res = await axios.post("/auth/login", { email, password });
      console.log(res)
      setAccessToken(res.data.token);
      const resMe = await axios.get("user/me");
      setUser(resMe.data.user);
   };

   const logout = () => {
      removeAccessToken();
      setUser(null);
   };

   const EditUser = async (firstName, lastName, image) => {
      try {
         setLoading(true);
         const profilePicUrl = await uploadImage(image);
         console.log(profilePicUrl);
         const data = {
            firstName,
            lastName,
            profilePicUrl,
         };
         const res = await axios.patch("/user", data);

         fetchMe();
         return res;
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <AuthContext.Provider
         value={{ register, user, login, logout, fetchMe, loading, EditUser }}
      >
         {children}
      </AuthContext.Provider>
   );
}

const useAuth = () => {
   const ctx = useContext(AuthContext);
   return ctx;
};

export default AuthContextProvider;
export { useAuth };
