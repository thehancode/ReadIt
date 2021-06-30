import axios from "axios";

const API = "http://localhost:5000";

export const login = async (user) => {
  return await axios.post(`${API}/login`, user).then((response) => {
    if (response.data.accessToken) {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
