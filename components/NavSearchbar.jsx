'use client'

import { useRef, useState } from 'react'

const NavSearchbar = ({ sendRequest }) => {
  const [query, setQuery] = useState('')
  const navInput = useRef()

  const resetQuery = () => {
    setQuery('')
    navInput.current.blur()
  }

  return (
    <div className='max-[280px]:w-[12.5rem] w-[17rem] md:w-[18rem] lg:w-[25rem] fixed left-5 top-3 md:left-32 z-40'>
      <form onSubmit={(e) => sendRequest(e, query, resetQuery)}>
        <label className='relative'>
          <button
            type='submit'
            className='max-[280px]:hidden absolute inset-y-1 right-5 flex items-center pl-2'
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
            className='py-2 pl-6 w-full bg-slate-100 text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-400'
            placeholder='Search for free images'
            type='text'
            name='search'
            value={query}
            ref={navInput}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default NavSearchbar
