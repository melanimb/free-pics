// get default images from api
export const fetchCuratedImages = async (page) => {
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`

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
    throw new Error('Error searching curated photos')
  }
}
