import useFormattedDate from '../hooks/useFormattedDate'
import styles from './Container.module.css'

const Container = () => {
  const formattedDate = useFormattedDate()

  return (
    <div className={styles.flex_container}>
      <p>{formattedDate}</p>
      <div className={styles.comment_holder}>
        <label htmlFor='comment'>
          <input
            className={styles.text_input}
            id='comment'
            type='text'
            placeholder='...type something'
          />
        </label>
        <button className={styles.send}>Send</button>
      </div>
    </div>
  )
}

export default Container
