import { useEffect, useState } from 'react'

function usePage (showCurated, formQuery, getCuratedPhotos, getSearchedPhotos) {
  const [page, setPage] = useState(1)

  const getNextPage = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    showCurated
      ? getCuratedPhotos(page)
      : getSearchedPhotos(formQuery, page)
  }, [page])

  return { page, setPage, getNextPage }
}
export default usePage
