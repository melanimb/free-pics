'use client'

import {
  GalleryContainer,
  SearchbarContainer,
  GalleryLayout,
  BlurImage,
  Searchbar,
  NavSearchbar
} from 'components'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchPhotos, useCuratedPhotos, usePage, useNotFound } from './hooks'

const App = () => {
  const [showCurated, setShowCurated] = useState(true)
  const [formQuery, setFormQuery] = useState('')
  const { curatedPhotos, getCuratedPhotos } = useCuratedPhotos()
  const { searchedPhotos, getSearchedPhotos } = useSearchPhotos()
  const { page, setPage, getNextPage } = usePage(showCurated, formQuery, getCuratedPhotos, getSearchedPhotos)
  const { notFound } = useNotFound(showCurated, searchedPhotos, page)

  const sendRequest = (e, query, resetQuery) => {
    e.preventDefault()
    setFormQuery(query)
    if (query !== '') {
      setShowCurated(false)
      const firstPage = 1
      setPage(firstPage)
      getSearchedPhotos(query, firstPage)
      resetQuery()
    }
  }

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
                  id={photo.id}
                  width={photo.width}
                  height={photo.height}
                />
            ))}
          </GalleryLayout>
        </InfiniteScroll>
      </GalleryContainer>
    </main>
  )
}

export default App
