import { useState } from 'react'
import styles from './CommentForm.module.css'

interface CommentData {
  author: string
  text: string
}

interface CommentFormProps {
  onAddComment: (comment: CommentData) => void
}

const CommentForm = ({ onAddComment }: CommentFormProps) => {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleAddComment = () => {
    onAddComment({ author, text })
    setAuthor('')
    setText('')
  }

  return (
    <div className={styles.comment_form}>
      <input
        className={styles.text_input}
        type='text'
        placeholder='Your Name'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
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
