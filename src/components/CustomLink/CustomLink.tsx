import styles from './CustomLink.module.css'

interface CustomLinkProperties {
  url: string
  text: string
  key: string
}

const CustomLink = ({ url, text, key }: CustomLinkProperties) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.link}
      key={key}
    >
      {text}
    </a>
  )
}

export default CustomLink
