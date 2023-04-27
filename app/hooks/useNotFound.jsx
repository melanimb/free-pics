import { useEffect, useState } from 'react'

function useNotFound (showCurated, searchedPhotos, page) {
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!showCurated && searchedPhotos.length === 0) {
      setNotFound(true)
    } else if (page === 1) {
      setNotFound(false)
      window.scrollTo(0, 550)
    }
  }, [searchedPhotos])

  return { notFound }
}
export default useNotFound
