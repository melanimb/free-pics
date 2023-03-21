'use client'

import {
  BlurImage,
  Container,
  Icon,
  SearchbarContainer,
  Gallery
} from 'components'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { API_KEY } from './services'
import InfiniteScroll from 'react-infinite-scroll-component'

const App = () => {
  const [curatedPhotos, setCuratedPhotos] = useState([])
  const [searchedPhotos, setSearchedPhotos] = useState([])
  const [showCurated, setShowCurated] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  // get default images from api
  const fetchCuratedImages = (url) => {
    fetch(url, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => setCuratedPhotos([...curatedPhotos, ...data.photos]))
      .catch((error) => console.log(error.message))
  }

  // get searched images by user
  const fetchSearchedImages = (url) => {
    fetch(url, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => page > 1 ? setSearchedPhotos([...searchedPhotos, ...data.photos]) : setSearchedPhotos(data.photos))
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
    console.log(page)
    showCurated
      ? fetchCuratedImages(`https://api.pexels.com/v1/curated?page=${page}&per_page=12`)
      : fetchSearchedImages(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`)
  }, [page])

  const sendRequest = (e, query) => {
    e.preventDefault()
    setShowCurated(false)
    setPage(1)
    fetchSearchedImages(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`)
  }

  const getNextPage = () => {
    setPage(page => page + 1)
  }

  console.log('curatedPhotos', curatedPhotos)
  console.log('searchedPhotos', searchedPhotos)

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
        <div>
          <button className='flex justify-center items-center gap-1 py-2 px-10 mt-3 sm:px-5 sm:pl-2 sm:ml-3 sm:mt-0 bg-gradient-to-r from-fuchsia-400 to-blue-500 hover:bg-gradient-to-l text-white w-full rounded-lg text-center text-base font-semibold tracking-wide'>
            <Icon icon={faSortDown} css='w-6 h-6 mb-2' />
            <p>Filters</p>
          </button>
        </div>
      </SearchbarContainer>

      <Container>
        <InfiniteScroll
          dataLength={showCurated ? curatedPhotos.length : searchedPhotos}
          next={getNextPage}
          hasMore
        >
          <Gallery>
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
          </Gallery>
        </InfiniteScroll>
      </Container>
    </main>
  )
}

export default App
