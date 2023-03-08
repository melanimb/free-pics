import Link from 'next/link'

const MobileSidebar = ({ pathNames }) => {
  return (
    <>
      <ul className='flex flex-col h-60 w-64 justify-evenly bg-slate-700 text-white fixed top-[4.5rem] rounded-xl right-2 z-50 sm:hidden'>
        {pathNames.map((pathName) => (
          <li key={pathName.name}>
            <Link
              key={pathName.path}
              href={pathName.path}
              className='p-7 pr-36'
            >
              {pathName.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default MobileSidebar
