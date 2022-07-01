import axios from "../config/axios";

const createRestaurant = (restaurant) =>
  axios.post("/restaurant/new", restaurant);

const getAllMenusOfRestaurant = (restaurantId) =>
  axios.get(`/restaurant/menuall/${restaurantId}`);

const createMenu = (restaurantId, menu) =>
  axios.post(`/restaurant/menu/${restaurantId}`, menu);

const reorderMenu = (restaurantId, newOrder) => {
  console.log({ restaurantId, newOrder });
  return axios.patch("/restaurant/menuorder", { restaurantId, newOrder });
 
};

const getMyDraft = () => axios.get("/restaurant/mydraft");

export { createRestaurant, getAllMenusOfRestaurant, createMenu, reorderMenu, getMyDraft };
