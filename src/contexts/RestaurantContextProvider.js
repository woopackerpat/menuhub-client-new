import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
   const [restaurant, setRestaurant] = useState();

   const fetchRestaurant = async () => {
      try {
         const res = await axios.get("/restaurant/all");
         setRestaurant(res.data.allRestaurant);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchRestaurant();
   }, []);

   return (
      <RestaurantContext.Provider value={{ restaurant }}>
         {children}
      </RestaurantContext.Provider>
   );
}

const useRestaurant = () => {
   const ctx = useContext(RestaurantContext);
   return ctx;
};

export default RestaurantContextProvider;

export { useRestaurant };
