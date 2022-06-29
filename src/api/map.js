import axios from "../config/axios";

const getRestaurantApi = (ne, sw, center) =>
  axios.post("/restaurant/map", {
    ne,
    sw,
    center,
  });

export { getRestaurantApi };
