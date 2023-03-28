import React from 'react'

const DropdownMenu = ({ sizes }) => {
  return (
    <ul className='bg-white shadow-md border border-slate-300 rounded-md absolute right-[11.375rem] top-28'>
      {sizes.map((size) => (
        <li
          key={size}
          className='cursor-pointer py-4 px-6 hover:bg-slate-100'
        >
          <span className='text-lg font-medium tracking-wide'>{size.name}</span>
          <span className='text-slate-400'>{size.size}</span>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
