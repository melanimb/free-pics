const getPhoto = () => {
  console.log('getting photo')
}

const DropdownMenu = ({ sizes }) => {
  return (
    <ul className='bg-white w-56 shadow-md border border-slate-300 rounded-md absolute top-16 right-0'>
      {sizes.map((size) => (
        <li
          key={size.name}
          className='cursor-pointer py-4 px-6 hover:bg-slate-100'
          onClick={() => getPhoto()}
        >
          <span className='text-lg font-medium tracking-wide'>{size.name}</span>
          <span className='text-slate-400'>{size.size}</span>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
