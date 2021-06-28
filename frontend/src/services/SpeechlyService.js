import axios from "axios";

const API = "http://localhost:5000";

export const getUserInfo = async (userID) => {
  return await axios.get(`${API}/users/${userID}`).then((response) => {
    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    return response.data;
  });
};
