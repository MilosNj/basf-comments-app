import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './CommentForm.module.css'
import { getCurrentTime } from '../../utils/helpers'
import { CommentProps as CommentData } from '../Comment/Comment'

interface CommentFormProps {
  onAddComment: (comment: CommentData) => void
}

const CommentForm = ({ onAddComment }: CommentFormProps) => {
  const [authorName] = useState('Anonymous') // this would be fetched from the DB
  const [authorPicture] = useState('src/assets/moci.jpg') // this would be fetched from the DB
  const [text, setText] = useState('')
  const [isReply, setIsReply] = useState(false)

  const handleAddComment = () => {
    onAddComment({
      author: { name: authorName, picture: authorPicture },
      text,
      timestamp: getCurrentTime(),
      isReply,
      id: uuidv4()
    })
    setText('')
    setIsReply(false)
  }

  return (
    <div className={styles.comment_form}>
      <input
        className={styles.text_input}
        type='text'
        placeholder='...type something'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.send_button} onClick={handleAddComment}>
        Send
      </button>
    </div>
  )
}

export default CommentForm
