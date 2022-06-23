const ACCESS_TOKEN = "accessToken";

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

module.exports = { getAccessToken, setAccessToken, removeAccessToken };
