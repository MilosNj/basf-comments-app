import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './CommentForm.module.css'
import { CommentsContext } from '../../context/store'
import { getCurrentTime } from '../../utils/helpers'
import { CommentProps as CommentData } from '../Comment/Comment'

interface CommentFormProps {
  parent_id?: string
}

const CommentForm = ({ parent_id }: CommentFormProps) => {
  const [authorName] = useState('Anonymous') // this would be fetched from the DB
  const [authorPicture] = useState('src/assets/moci.jpg') // this would be fetched from the DB
  const [text, setText] = useState('')
  const { setComments } = useContext(CommentsContext)

  const handleAddComment = () => {
    if (text.trim() === '') {
      return
    }

    const newComment: CommentData = {
      author: { name: authorName, picture: authorPicture },
      text,
      timestamp: getCurrentTime(),
      id: uuidv4(),
      parent_id: parent_id
    }

    setComments((prevComments) => [...prevComments, newComment])
    setText('')
  }

  return (
    <div className={styles.comment_form}>
      <input
        name='comment'
        maxLength={200}
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
