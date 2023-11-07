import Comment, { CommentProps } from '../Comment/Comment'
import styles from './CommentList.module.css'

interface CommentListProps {
  comments: CommentProps[]
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className={styles.comment_list}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author}
          text={comment.text}
          timestamp={comment.timestamp}
          isReply={comment.isReply}
        />
      ))}
    </div>
  )
}

export default CommentList
