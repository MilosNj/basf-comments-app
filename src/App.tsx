import { useState } from 'react'
import styles from './App.module.css'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'
import useFormattedDate from './hooks/useFormattedDate'

interface CommentData {
  author: string
  text: string
}

const App = () => {
  const [comments, setComments] = useState<CommentData[]>([])
  const formattedDate = useFormattedDate()

  const addComment = (comment: CommentData) => {
    setComments([...comments, comment])
  }

  return (
    <>
      <div className={styles.app}>
        <p>{formattedDate}</p>
        <CommentList comments={comments} />
        <CommentForm onAddComment={addComment} />
      </div>
    </>
  )
}

export default App
