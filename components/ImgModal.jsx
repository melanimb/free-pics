import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Icon from './Icon'

const showMeasures = () => {
  console.log('showing measures dropdown')
}

const ImgModal = ({ alt, src, closeModal }) => {
  return (
    <div onClick={() => closeModal()} className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/50'>
      <article className='w-full md:w-5/6 md:h-[95%] fixed md:top-6 md:left-[8%] p-6 bg-white rounded-xl'>
        <div className='flex justify-between items-center mb-4'>
          <button onClick={() => closeModal()} className='self-start font-medium text-2xl p-1 rounded-md'>
            <Icon icon={faXmark} css='w-6 h-7' />
          </button>
          <button className='self-start py-3 p-8 ml-3 rounded-md bg-gradient-to-r from-fuchsia-400 to-blue-500 text-white text-xl font-medium tracking-wide' onClick={showMeasures}>Download</button>
        </div>
        <div>
          <Image
            alt={alt}
            width='500'
            height='700'
            src={src}
            className='rounded-lg m-auto'
          />
        </div>
      </article>
    </div>
  )
}

export default ImgModal
