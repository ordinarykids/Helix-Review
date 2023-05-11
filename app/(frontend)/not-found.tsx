import pageStyles from './[[...slug]]/page.module.css'

export default function NotFound() {
  return (
    <main className={pageStyles.main}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </main>
  )
}
