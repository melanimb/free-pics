'use client'

import {
  GalleryContainer,
  // Icon,
  SearchbarContainer,
  GalleryLayout,
  BlurImage
} from 'components'
// import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { fetchCuratedImages, fetchSearchedImages } from './services'
import InfiniteScroll from 'react-infinite-scroll-component'

const App = () => {
  const [curatedPhotos, setCuratedPhotos] = useState([])
  const [searchedPhotos, setSearchedPhotos] = useState([])
  const [showCurated, setShowCurated] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    showCurated
      ? fetchCuratedImages(`https://api.pexels.com/v1/curated?page=${page}&per_page=12`, curatedPhotos, setCuratedPhotos)
      : fetchSearchedImages(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`, searchedPhotos, setSearchedPhotos, page)
  }, [page])

  useEffect(() => {
    if (!showCurated && searchedPhotos.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
  }, [searchedPhotos])

  const sendRequest = (e, query) => {
    e.preventDefault()
    if (query !== '') {
      setShowCurated(false)
      setPage(() => 1)
      fetchSearchedImages(`https://api.pexels.com/v1/search?query=${query}&page=1&per_page=12`, searchedPhotos, setSearchedPhotos, page)
    }
  }

  const getNextPage = () => {
    setPage(page => page + 1)
  }

  console.log(searchedPhotos)

  return (
    <main>
      <SearchbarContainer>
        <div>
          <form onSubmit={(e) => sendRequest(e, query)}>
            <label className='relative'>
              <button
                type='submit'
                className='absolute inset-y-1 right-5 flex items-center pl-2'
              >
                <svg
                  className='h-5 w-5 fill-slate-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
                </svg>
              </button>
              <input
                className='py-3 px-40 pl-6 sm:py-4 sm:px-72 sm:pl-6 bg-slate-100 text-gray-800 rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ring-opacity-50 shadow-md'
                placeholder='Search for free images'
                type='text'
                name='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </form>
        </div>
        {/* <div>
          <button className='flex justify-center items-center gap-1 py-2 px-10 mt-3 sm:px-5 sm:pl-2 sm:ml-3 sm:mt-0 bg-gradient-to-r from-fuchsia-400 to-blue-500 hover:bg-gradient-to-l text-white w-full rounded-lg text-center text-base font-semibold tracking-wide'>
            <Icon icon={faSortDown} css='w-6 h-6 mb-2' />
            <p>Filters</p>
          </button>
        </div> */}
      </SearchbarContainer>
      <div className='fixed top-3 left-32 z-50'>
        <form onSubmit={(e) => sendRequest(e, query)}>
          <label className='relative'>
            <button
              type='submit'
              className='absolute inset-y-1 right-5 flex items-center pl-2'
            >
              <svg
                className='h-5 w-5 fill-slate-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
              </svg>
            </button>
            <input
              className='py-2 px-16 pl-6 md:px-24 md:pl-6 bg-slate-100 text-gray-800 rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ring-opacity-50'
              placeholder='Search for free images'
              type='text'
              name='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </form>
      </div>
      <GalleryContainer>
        {notFound && <p className='text-2xl'>No results found, try with another term.</p>}
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
