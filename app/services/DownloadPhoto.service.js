export const DownloadPhoto = (id, size) => {
  const { Blob } = window

  const url = `https://api.pexels.com/v1/photos/${id}`
  fetch(url, {
    headers: {
      Authorization: process.env.PEXELS_API_KEY
    }
  })
    .then((res) => res.json())
    .then((data) => {
      const baseUrl = data.src.original
      const imageUrl = `${baseUrl}?auto=compress&cs=tinysrgb&w=${size}`
      fetch(imageUrl)
        .then(res => res.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]))
          const link = document.createElement('a')
          link.href = url
          const timestamp = Math.floor(Date.now() / 1000)
          link.setAttribute('download', `${timestamp}.jpg`)
          document.body.appendChild(link)
          link.click()
          link.parentNode.removeChild(link)
        })
    })
    .catch((error) => console.log(error.message))
}
