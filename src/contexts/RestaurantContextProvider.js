import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
   const [restaurant, setRestaurant] = useState([]);
   const [like, setLike] = useState(null);
   const [isEditRestaurant, setIsEditRestaurant] = useState(false);
  
   // infinite Scroller
   const [page, setPage] = useState(2);
   const [totalData, setTotalData] = useState();
   const limit = 7;

   const [isLoading, setIsLoading] = useState(false);

   const fetchRestaurant = async () => {
      try {
         setIsLoading(true);

         const res = await axios.get(
            `/restaurant/all?page=${1}&limit=${limit}`
         );

         console.log(res.data);
         setRestaurant(res.data.allRestaurant);
         console.log(res.data.allRestaurant, "allRes");
         setTotalData(res.data.totalRecords);
         setPage(2);
      } catch (err) {
         console.log(err);
      } finally {
         setIsLoading(false);
      }
   };

   const fetchLike = async (restaurantId) => {
      const res = await axios.get("/restaurant/getlike/" + restaurantId);
      console.log(res.data);
      setLike(res.data);
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
         setPage(res.data.nextPage);
         setRestaurant([...restaurant, ...res.data.allRestaurant]);
         console.log(res.data.allRestaurant, "new all");
      } catch (err) {
         console.log(err);
      }
   };

   const createLike = async (restaurantId) => {
      try {
         const res = await axios.patch("/restaurant/like/" + restaurantId);
         // setLike(res.data.Like);
         fetchLike();
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
            like,
            fetchLike,
            limit,
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
