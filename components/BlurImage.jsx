/* eslint-disable camelcase */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImgModal from './ImgModal'

function cn (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlurImage ({ alt, src, photographer, photographer_url }) {
  const [isLoading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
    <article>
      <button className='mb-4' onClick={() => setShowModal(true)}>
        <div className='w-fit bg-gray-200 rounded-lg overflow-hidden'>
          <Image
            alt={alt}
            width='500'
            height='500'
            src={src}
            className={cn(
              'hover:opacity-70 duration-700 ease-in-out',
              isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <Link href={photographer_url} className='text-sm text-slate-700'>{photographer}</Link>
      </button>
      {showModal ? <ImgModal alt={alt} src={src} /> : null}
    </article>
  )
}
