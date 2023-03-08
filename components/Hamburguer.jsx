import Icon from './Icon'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Hamburguer = ({ showMenu }) => {
  return (
    <button onClick={showMenu}>
      <Icon icon={faBars} css='h-8 mt-1 mx-2 sm:hidden text-white' />
    </button>
  )
}
export default Hamburguer
