import { fetchCuratedImages } from 'app/services'
import { useState } from 'react'

function useCuratedPhotos () {
  const [curatedPhotos, setCuratedPhotos] = useState([])

  const getCuratedPhotos = async (page) => {
    try {
      const newPhotos = await fetchCuratedImages(page)
      setCuratedPhotos([...curatedPhotos, ...newPhotos])
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return { curatedPhotos, getCuratedPhotos }
}
export default useCuratedPhotos
