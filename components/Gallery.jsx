const Gallery = ({ children }) => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 gap-8'>
      {children}
    </div>
  )
}
export default Gallery
