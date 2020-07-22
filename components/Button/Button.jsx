import styles from './Button.module.css'

export default function Button({ text, type="button" }) {
  return (
    <button type={type} className={styles.button}>{text}</button>
  )
}
