import { useState } from 'react'
import styles from './CommentForm.module.css'
import { getCurrentTime } from '../../utils/helpers'
import { CommentProps as CommentData } from '../Comment/Comment'

interface CommentFormProps {
  onAddComment: (comment: CommentData) => void
}

const CommentForm = ({ onAddComment }: CommentFormProps) => {
  const [authorName, setAuthorName] = useState('')
  const [authorPicture, setAuthorPicture] = useState('')
  const [text, setText] = useState('')
  const [isReply, setIsReply] = useState(false)

  const handleAddComment = () => {
    onAddComment({
      author: { name: authorName, picture: authorPicture },
      text,
      timestamp: getCurrentTime(),
      isReply,
      id: 'generateThis'
    })
    setAuthorName('')
    setAuthorPicture('')
    setText('')
    setIsReply(false)
  }

  return (
    <div className={styles.comment_form}>
      <input
        className={styles.text_input}
        type='text'
        placeholder='Your Name'
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
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
