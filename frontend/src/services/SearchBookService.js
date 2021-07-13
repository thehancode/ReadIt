import axios from "axios";

const API = "http://gutendex.com/books";


export const searchBook = async (query) => {
    console.log("sending",`${API}?search=${encodeURIComponent(query)}`);
  return await axios.get(`${API}?search=${encodeURIComponent(query)}`).then((response) => {

    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    console.log("book search result",response.data.results);
    if (response.status === 200)
        return response.data.results;
  }).catch((error)=>{
    console.error(error);
  });
};
