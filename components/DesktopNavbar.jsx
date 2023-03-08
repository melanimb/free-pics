import Link from 'next/link'

const DesktopNavbar = ({ pathNames }) => {
  return (
    <>
      <ul className='hidden sm:flex gap-4 mr-3 items-center text-white'>
        {pathNames.map((pathName) => (
          <li
            className='bg-slate-600 hover:bg-slate-500 transition ease-in duration-200 cursor-pointer py-2 px-4 rounded-2xl'
            key={pathName.name}
          >
            <Link key={pathName.path} href={pathName.path}>
              {pathName.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default DesktopNavbar
