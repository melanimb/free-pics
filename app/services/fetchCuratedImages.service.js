import { API_KEY } from './API_KEY.service'

// get default images from api
export const fetchCuratedImages = (url, curatedPhotos, setCuratedPhotos) => {
  fetch(url, {
    headers: {
      Authorization: API_KEY
    }
  })
    .then((res) => res.json())
    .then((data) => setCuratedPhotos([...curatedPhotos, ...data.photos]))
    .catch((error) => console.log(error.message))
}
