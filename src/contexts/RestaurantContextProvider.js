import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const [restaurant, setRestaurant] = useState([]);

  const [isEditRestaurant, setIsEditRestaurant] = useState(false);

  // infinite Scroller
  const [page, setPage] = useState(2);
  const [totalData, setTotalData] = useState();
  const limit = 6;

  const [isLoading, setIsLoading] = useState(false);

  const fetchRestaurant = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get(`/restaurant/all?page=${1}&limit=${limit}`);

      console.log(res.data);
      setRestaurant(res.data.allRestaurant);
      setTotalData(res.data.totalRecords);
      setPage(2);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const allLoadMore = async () => {
    console.log("isLoadMore");
    try {
      const res = await axios.get(
        `/restaurant/all?page=${page}&limit=${limit}`
      );
      setRestaurant([...restaurant, ...res.data.allRestaurant]);
    } catch (err) {
      console.log(err);
    }
  };

  const createLike = async restaurantId => {
    try {
      await axios.put("/restaurant/like/" + restaurantId);
      fetchRestaurant();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        createLike,
        isEditRestaurant,
        setIsEditRestaurant,
        isLoading,
        allLoadMore,
        totalData,
      }}
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
