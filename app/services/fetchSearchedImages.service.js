// get searched images by user
export const fetchSearchedImages = async (query, page) => {
  const url = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12&locale=es-ES`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      }
    })
    const data = await response.json()

    const photos = data.photos

    return photos
  } catch (e) {
    throw new Error('Error searching photos')
  }
}
