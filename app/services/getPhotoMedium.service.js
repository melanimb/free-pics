import { API_KEY } from './API_KEY.service'

export const getPhotoMedium = (id) => {
  const { Blob } = window

  const url = `https://api.pexels.com/v1/photos/${id}`
  fetch(url, {
    headers: {
      Authorization: API_KEY
    }
  })
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data.src.medium
      fetch(imageUrl)
        .then(res => res.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'image.jpg')
          document.body.appendChild(link)
          link.click()
          link.parentNode.removeChild(link)
        })
    })
    .catch((error) => console.log(error.message))
}
