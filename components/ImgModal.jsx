import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Icon from './Icon'

const showMeasures = () => {
  console.log('showing measures dropdown')
}

const ImgModal = ({ alt, src, closeModal }) => {
  return (
    <div onClick={() => closeModal()} className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/70'>
      <article onClick={e => e.stopPropagation()} className='m-auto w-full md:w-5/6 md:h-[95%] md:mt-6 p-6 bg-white rounded-xl'>
        <div className='flex justify-between items-center mb-4'>
          <button onClick={() => closeModal()}>
            <Icon icon={faXmark} css='w-7 h-7 p-2' />
          </button>
          <button className='py-3 p-8 ml-3 rounded-md bg-gradient-to-r from-fuchsia-400 to-blue-500 text-white text-xl font-medium tracking-wide' onClick={showMeasures}>Download</button>
        </div>
        <div className='flex items-center justify-center h-[90%]'>
          <Image
            alt={alt}
            width='500'
            height='700'
            src={src}
            className='rounded-lg'
          />
        </div>
      </article>
    </div>
  )
}

export default ImgModal
