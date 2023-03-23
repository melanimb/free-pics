import Image from 'next/image'

const showMeasures = () => {
  console.log('showing measures dropdown')
}

const ImgModal = ({ alt, src, closeModal }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/50'>
      <article className='w-3/5 p-9 bg-white flex justify-between fixed top-3 left-[20%] rounded-2xl'>
        <button onClick={() => closeModal()} className='self-start'>X</button>
        <div className='w-fit'>
          <Image
            alt={alt}
            width='550'
            height='550'
            src={src}
            className='rounded-lg'
          />
        </div>
        <button className='self-start' onClick={showMeasures}>Download</button>
      </article>
    </div>
  )
}

export default ImgModal
