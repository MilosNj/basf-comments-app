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
  parent_id?: string
  isReply: boolean
}

const Comment = ({
  id,
  author,
  text,
  timestamp,
  isReply = false
}: CommentProps) => {
  return !isReply ? (
    <div className={styles.comment} id={id}>
      <img
        className={styles.profile_picture}
        src={author.picture}
        alt='profile picture'
      />
      <div className={styles.comment_wrapper}>
        <div className={styles.author_text}>
          <h4>{author.name}</h4>
          <p>{text}</p>
        </div>
        <div className={styles.timestamp_reply}>
          <p>{timestamp}</p>
          <button>Reply</button>
        </div>
      </div>
      {/* TODO: Add a reply button */}
    </div>
  ) : (
    <div className={styles.comment_reply} id={id}>
      <img
        className={styles.profile_picture}
        src={author.picture}
        alt='profile picture'
      />
      <h4>{author.name}</h4>
      <p>{text}</p>
      <p>{timestamp}</p>
      {/* TODO: Add a reply button */}
    </div>
  )
}

export default Comment
