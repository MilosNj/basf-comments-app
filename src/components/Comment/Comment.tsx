// @ts-expect-error There is no TS support for this package
import AutoLinkText from 'react-autolink-text2'
import styles from './Comment.module.css'
import { useState } from 'react'
import CommentForm from '../CommentForm/CommentForm'

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
}

const Comment = ({ id, author, text, timestamp, parent_id }: CommentProps) => {
  const [replying, setReplying] = useState(false)

  const handleReply = () => {
    setReplying(!replying)
  }

  return (
    <div
      className={`${styles.comment} ${parent_id ? styles.comment_reply : ''}`}
      id={id}
    >
      <img
        className={styles.profile_picture}
        src={author.picture}
        alt='profile picture'
      />
      <div className={styles.comment_wrapper}>
        <div className={styles.author_text}>
          <h4 className={styles.name}>{author.name}</h4>
          <AutoLinkText
            className={styles.text}
            text={text}
            linkProps={{
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                color: '#023168',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
              }
            }}
          />
        </div>
        <div className={styles.timestamp_reply}>
          <p className={styles.timestamp}>{timestamp}</p>
          <button className={styles.reply_button} onClick={handleReply}>
            Reply
          </button>
        </div>
      </div>
      {replying && (
        <CommentForm parent_id={id} onHideReply={() => setReplying(false)} />
      )}
    </div>
  )
}

export default Comment
