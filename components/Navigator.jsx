'use client'

import SearchNavbar from './SearchNavbar'
import Hamburguer from './Hamburguer'
import MobileSidebar from './MobileSidebar'
import DesktopNavbar from './DesktopNavbar'
import { useState } from 'react'

const Navigator = ({ pathNames }) => {
  const [clicked, setClicked] = useState(false)

  const showMenu = () => {
    return setClicked(!clicked)
  }

  return (
    <>
      <nav className='flex justify-between p-3 bg-slate-700 shadow-lg fixed left-0 right-0 z-40'>
        <div className='flex items-center gap-4 ml-3'>
          <p className='hidden md:inline text-white font-semibold text-xl tracking-wide'>
            FreePics
          </p>
          <SearchNavbar />
        </div>
        <Hamburguer showMenu={showMenu} />
        {clicked ? <MobileSidebar pathNames={pathNames} /> : null}
        <DesktopNavbar pathNames={pathNames} />
      </nav>
    </>
  )
}
export default Navigator
