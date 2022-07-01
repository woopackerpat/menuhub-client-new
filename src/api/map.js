import axios from "../config/axios";

const getRestaurantApi = () =>
  axios.get("/restaurant/map", {
    ne: { lat: 13.75173332238721, lng: 100.52915734103169 },
    sw: { lat: 13.737664154696432, lng: 100.51767748644795 },
    center: { lat: 13.744510151371538, lng: 100.523353559048 },
  });

export { getRestaurantApi };
