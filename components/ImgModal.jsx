'use client'

import { faSortDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { imgSizes } from 'models'
import Image from 'next/image'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import Icon from './Icon'

const ImgModal = ({ alt, src, closeModal }) => {
  const [showSizes, setShowSizes] = useState(false)

  return (
    <div onClick={() => closeModal()} className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/70'>
      <article onClick={e => e.stopPropagation()} className='m-auto w-full md:w-5/6 md:h-[95%] md:mt-6 p-6 bg-white rounded-xl'>
        <div className='flex justify-between items-center mb-4'>
          <button onClick={() => closeModal()}>
            <Icon icon={faXmark} css='w-7 h-7 p-2' />
          </button>
          <button
            className='flex py-3 pl-7 pr-5 rounded-md bg-gradient-to-r from-fuchsia-400 to-blue-500 text-white'
            onClick={() => setShowSizes(!showSizes)}
          >
            <p className='text-xl font-medium tracking-wide'>Download</p>
            <Icon icon={faSortDown} css='w-6 h-6 ml-1 -mt-1' />
          </button>
          {showSizes && <DropdownMenu sizes={[imgSizes.ORIGINAL, imgSizes.LARGE, imgSizes.MEDIUM, imgSizes.SMALL]} />}
        </div>
        <div className='flex items-center justify-center h-[90%]'>
          <Image
            alt={alt}
            width='500'
            height='700'
            src={src}
            className='rounded-lg'
          />
        </div>
      </article>
    </div>
  )
}

export default ImgModal
