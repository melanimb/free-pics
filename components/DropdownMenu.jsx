import { DownloadPhoto } from '../app/services'

const getPhoto = (id, name, size) => {
  const SIZE_NAMES = {
    Original: () => DownloadPhoto(id, size),
    Large: () => DownloadPhoto(id, size),
    Medium: () => DownloadPhoto(id, size),
    Small: () => DownloadPhoto(id, size)
  }

  return SIZE_NAMES[name]()
}

const DropdownMenu = ({ sizes, id, width, height }) => {
  return (
    <ul className='bg-white w-56 shadow-md border border-slate-300 rounded-md absolute top-16 right-0'>
      {sizes.map((size) => (
        <li
          key={size.name}
          className='cursor-pointer py-4 px-6 hover:bg-slate-100'
          onClick={() => getPhoto(id, size.name, size.size)}
        >
          <span className='text-lg font-medium tracking-wide'>{size.name}</span>
          <span className='text-slate-400 ml-2'>{size.name === 'Original' && `(${width}x${height})`}{size.measures}</span>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
