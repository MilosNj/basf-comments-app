import { useState } from 'react'
import styles from './App.module.css'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'
import useFormattedDate from './hooks/useFormattedDate'
import { CommentsContext } from './context/store'
import { CommentProps as CommentData } from './components/Comment/Comment'

const App = () => {
  const [comments, setComments] = useState<CommentData[]>([])
  const formattedDate = useFormattedDate()

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <div className={styles.app}>
        <p className={styles.formatted_date}>{formattedDate}</p>
        <div className={styles.comment_list_wrapper}>
          <CommentList />
        </div>
        <CommentForm />
      </div>
    </CommentsContext.Provider>
  )
}

export default App
