import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const PinContext = createContext();

function PinContextProvider({ children }) {
   const [pin, setPin] = useState([]);

   const fetchPin = async () => {
      try {
         const res = await axios.get("/pin");
         setPin(res.data);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchPin();
   }, []);

   const createNewPin = async (name, restaurantId) => {
      try {
         await axios.post("/pin", { name, restaurantId });
         fetchPin();
      } catch (err) {
         console.log(err);
      }
   };

   const savePinRes = async (input) => {
      try {
         console.log(input);
         const res = await axios.patch("/pin/restaurant", input);
         fetchPin();
         console.log(res.data, "res");
      } catch (err) {
         console.log(err);
      }
   };

   const deletePin = async (pinId) => {
      try {
         await axios.delete("/pin", { pinId });
         fetchPin();
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <PinContext.Provider value={{ createNewPin, pin, deletePin, savePinRes }}>
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
