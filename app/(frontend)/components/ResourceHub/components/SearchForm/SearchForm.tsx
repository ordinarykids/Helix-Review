import styles from './SearchForm.module.scss'
import SearchIcon from '../../../svgs/Search'

export default function SearchForm() {
  return (
    <form className={styles.searchForm} method='get'>
      <input className={styles.searchForm_Input} type='search' name='s' placeholder='Search' />
      <button type='submit' className={styles.searchForm_Submit} aria-label='Search'>
        <SearchIcon />
      </button>
    </form>
  )
}
