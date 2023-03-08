import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, css }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className={css} />
    </div>
  )
}
export default Icon
