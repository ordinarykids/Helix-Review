import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </main>
  )
}
