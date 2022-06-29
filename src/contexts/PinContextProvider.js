import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const PinContext = createContext();

function PinContextProvider({ children }) {
   const [pin, setPin] = useState([]);

   const fetchPin = async () => {
      try {
         const res = await axios.get("/pin");
         setPin(res.data);
         console.log(res.data);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchPin();
   }, []);

   const createNewPin = async (name, restaurantId) => {
      try {
         const res = await axios.post("/pin", { name, restaurantId });
         console.log(res.data);
         setPin(res.data);
         fetchPin();
      } catch (err) {
         console.log(err);
      }
   };

   const deletePin = async (pinId) => {
      try {
         await axios.delete("/pin", { pinId });
         setPin([]);
         fetchPin();
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <PinContext.Provider value={{ createNewPin, pin, deletePin }}>
         {children}
      </PinContext.Provider>
   );
}

const usePin = () => {
   const ctx = useContext(PinContext);
   return ctx;
};

export default PinContextProvider;

export { usePin };
