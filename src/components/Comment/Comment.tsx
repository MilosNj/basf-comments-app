import styles from './Comment.module.css'

interface CommentProps {
  author: string
  text: string
}

const Comment = ({ author, text }: CommentProps) => {
  return (
    <div className={styles.comment}>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Comment
