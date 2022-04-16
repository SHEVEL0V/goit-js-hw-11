import axios from "axios";
import renderCards from "./render-HTML";

export default async function fechApi(text, page) {
  const KEY = "key=26773095-8033af7b4c44df434cdac5aab";
  const per_page = 20;
  const options = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`;

  await axios
    .get(`https://pixabay.com/api/?${KEY}&q=${text}${options}`)
    .then(function (response) {
      renderCards(response, page);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {});
}
