import useFormattedDate from '../hooks/useFormattedDate'
import './Container.module.css'

const Container = () => {
  const formattedDate = useFormattedDate()

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  )
}

export default Container
