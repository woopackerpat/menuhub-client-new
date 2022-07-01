import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const [restaurant, setRestaurant] = useState([]);

  const [isEditRestaurant, setIsEditRestaurant] = useState(false);

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

  const createLike = async (restaurantId) => {
    try {
      const res = await axios.put("/restaurant/like/" + restaurantId);
      fetchRestaurant();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurant, createLike, isEditRestaurant, setIsEditRestaurant }}
    >
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
