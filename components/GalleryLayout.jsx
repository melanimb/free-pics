const GalleryLayout = ({ children }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {children}
    </section>
  )
}
export default GalleryLayout
