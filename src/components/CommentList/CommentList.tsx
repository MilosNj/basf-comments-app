import { useContext } from 'react'
import Comment from '../Comment/Comment'
import styles from './CommentList.module.css'
import { CommentsContext } from '../../context/store'

const CommentList = () => {
  const { comments } = useContext(CommentsContext)

  return (
    <div className={styles.comment_list}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author}
          text={comment.text}
          timestamp={comment.timestamp}
          parent_id={comment.parent_id}
        />
      ))}
    </div>
  )
}

export default CommentList
