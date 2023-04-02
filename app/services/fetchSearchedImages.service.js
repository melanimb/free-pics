import { API_KEY } from './API_KEY.service'

// get searched images by user
export const fetchSearchedImages = (url, searchedPhotos, setSearchedPhotos, page) => {
  fetch(url, {
    headers: {
      Authorization: API_KEY
    }
  })
    .then((res) => res.json())
    .then((data) => page > 1
      ? setSearchedPhotos([...searchedPhotos, ...data.photos])
      : setSearchedPhotos(data.photos))
    .catch((error) => console.log(error.message))
}
