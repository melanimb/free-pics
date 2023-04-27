import { fetchSearchedImages } from 'app/services'
import { useState } from 'react'

function useSearchPhotos () {
  const [searchedPhotos, setSearchedPhotos] = useState([])

  const getSearchedPhotos = async (query, page) => {
    try {
      const newPhotos = await fetchSearchedImages(query, page)
      page > 1
        ? setSearchedPhotos([...searchedPhotos, ...newPhotos])
        : setSearchedPhotos(newPhotos)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return { searchedPhotos, getSearchedPhotos }
}

export default useSearchPhotos
