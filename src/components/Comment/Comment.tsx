import styles from './Comment.module.css'

type Author = {
  name: string
  picture: string
}

export interface CommentProps {
  id: string
  author: Author
  text: string
  timestamp: string
  parent_ID?: string
  isReply: boolean
}

const Comment = ({
  author,
  text,
  timestamp,
  isReply = false
}: CommentProps) => {
  return isReply ? (
    <div className={styles.comment_reply}>
      <h4>{author.name}</h4>
      <p>{text}</p>
      <p>{timestamp}</p>
      {/* TODO: Add a reply button */}
    </div>
  ) : (
    <div className={styles.comment}>
      <img src={author.picture} alt='profile picture' />
      <h4>{author.name}</h4>
      <p>{text}</p>
      <p>{timestamp}</p>
      {/* TODO: Add a reply button */}
    </div>
  )
}

export default Comment
