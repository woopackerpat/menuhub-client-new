import axios from "axios";

const createRestaurant = (restaurant) =>
  axios.post("/restaurant/new", restaurant);

const getAllMenusOfRestaurant = (restaurantId) =>
  axios.get(`/restaurant/menuall/${restaurantId}`);

const createMenu = (restaurantId, menu) =>
  axios.post(`/restaurant/menu/${restaurantId}`, menu);

export { createRestaurant, getAllMenusOfRestaurant, createMenu };
