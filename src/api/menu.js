import axios from "axios";

const createRestaurant = (restaurant) =>
  axios.post("/restaurant/new", restaurant);

export { createRestaurant };
