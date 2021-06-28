import axios from "axios";

const API = "https://www.poemist.com/api/v1/randompoems";

export const randomPoem = async () => {
  return await axios.get(API).then((response) => {
    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    return response;
  });
};
