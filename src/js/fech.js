import axios from 'axios';
import renderCards from './render-HTML';

export default async function fechApi(text, page, perPage) {
  const KEY = 'key=26773095-8033af7b4c44df434cdac5aab';
  const options = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

  await axios
    .get(`https://pixabay.com/api/?${KEY}&q=${text}${options}`)
    .then(function (response) {
      renderCards(response, page, perPage);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {});
}
