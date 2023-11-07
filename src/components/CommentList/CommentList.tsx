import Comment from '../Comment/Comment'
import styles from './CommentList.module.css'

interface CommentData {
  author: string
  text: string
}

interface CommentListProps {
  comments: CommentData[]
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className={styles.comment_list}>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} text={comment.text} />
      ))}
    </div>
  )
}

export default CommentList
