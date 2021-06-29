import axios from "axios";

//const API = "https://www.poemist.com/api/v1/randompoems";
const API = "https://quotes.rest/qod?language=en";
//const API2 = "https://zenquotes.io/api/quotes";
const API2 = "https://type.fit/api/quotes";
export const quoteOfDay = async () => {
  return await axios.get(API).then((response) => {

    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    console.log(response)
    if(response.request.status === 200){
      let quote = response.data.contents.quotes[0];
      response = {
        quote: quote.quote,
        author: quote.author,
        category: quote.category,
        title: "Frase del Día",
        background: quote.background,
      }
    }else{
      response = {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
        title: "Frase del Día",
      }
    }
    return response;
  }).catch((error)=>{
    console.log(error);
  });
};

export const randomQuote = async () => {
  const headers ={
    "Content-Type": "text/plain",
  }
  return await axios.get(API2,headers).then((response) => {
    console.log(response)
    if(response.status === 200){
      let quotes = response.data;
      let indice = Math.floor(Math.random() * 1642);
      let quote = quotes[indice];
      response = {
        quote: quote.text,
        author: quote.author,
        title: "Frase Aleatoria"
      }
    }
    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    return response;
  }).catch((error)=>{
    console.log(error)
  });
};
