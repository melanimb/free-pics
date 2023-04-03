'use client'

import {
  GalleryContainer,
  SearchbarContainer,
  GalleryLayout,
  BlurImage,
  Searchbar,
  NavSearchbar
} from 'components'
import { useEffect, useState } from 'react'
import { fetchCuratedImages, fetchSearchedImages } from './services'
import InfiniteScroll from 'react-infinite-scroll-component'

const App = () => {
  const [curatedPhotos, setCuratedPhotos] = useState([])
  const [searchedPhotos, setSearchedPhotos] = useState([])
  const [showCurated, setShowCurated] = useState(true)
  const [page, setPage] = useState(1)
  const [notFound, setNotFound] = useState(false)
  const [formQuery, setFormQuery] = useState('')

  useEffect(() => {
    showCurated
      ? fetchCuratedImages(`https://api.pexels.com/v1/curated?page=${page}&per_page=12`, curatedPhotos, setCuratedPhotos)
      : fetchSearchedImages(`https://api.pexels.com/v1/search?query=${formQuery}&page=${page}&per_page=12`, searchedPhotos, setSearchedPhotos, page)
  }, [page])

  useEffect(() => {
    if (!showCurated && searchedPhotos.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
  }, [searchedPhotos])

  const sendRequest = (e, query, resetQuery) => {
    e.preventDefault()
    setFormQuery(query)
    if (query !== '') {
      setShowCurated(false)
      setPage(() => 1)
      fetchSearchedImages(`https://api.pexels.com/v1/search?query=${query}&page=1&per_page=12`, searchedPhotos, setSearchedPhotos, page)
    }
    resetQuery()
    window.scrollTo(0, 0)
  }

  const getNextPage = () => {
    setPage(page => page + 1)
  }

  console.log(searchedPhotos)

  return (
    <main>
      <NavSearchbar sendRequest={sendRequest} />
      <SearchbarContainer>
        <Searchbar sendRequest={sendRequest} />
      </SearchbarContainer>
      <GalleryContainer>
        {notFound && <p className='text-4xl font-bold'>No results found, try with another term.</p>}
        <InfiniteScroll
          dataLength={showCurated ? curatedPhotos.length : searchedPhotos.length}
          next={getNextPage}
          hasMore
        >
          <GalleryLayout>
            {(showCurated
              ? curatedPhotos
              : searchedPhotos).map((photo, index) => (
                <BlurImage
                  key={index}
                  alt={photo.alt}
                  src={photo.src.portrait}
                  photographer={photo.photographer}
                  photographer_url={photo.photographer_url}
                />
            ))}
          </GalleryLayout>
        </InfiniteScroll>
      </GalleryContainer>
    </main>
  )
}

export default App
