import cx from 'classnames'
import styles from './FilterGroup.module.scss'

export type TResourceFilter = {
  name: string
  slug: string
}

export type TSelectedTerms = {
  categories: string[]
  type: string
}

interface IResourceFilterGroup {
  taxonomyName: 'category' | 'type'
  terms: TResourceFilter[]
  selectedTerms: TSelectedTerms
  setSelectedTerms: React.Dispatch<React.SetStateAction<TSelectedTerms>>
  setFilterInteraction: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FilterGroup({
  taxonomyName,
  terms,
  selectedTerms,
  setSelectedTerms,
  setFilterInteraction,
}: IResourceFilterGroup) {
  const updateSelectedTerms = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.target instanceof HTMLButtonElement) {
      const selectedTermSlug = event.target.dataset.slug
      if (selectedTermSlug) {
        setSelectedTerms((prevTerms) => {
          if (taxonomyName === 'category') {
            const prevCategories = prevTerms.categories
            let newCategories
            if (prevCategories.includes(selectedTermSlug)) {
              newCategories = prevCategories.filter((termSlug) => termSlug !== selectedTermSlug)
            } else {
              newCategories = [...prevCategories, selectedTermSlug]
            }
            return {
              ...prevTerms,
              categories: newCategories,
            }
          }
          const prevType = prevTerms.type
          if (prevType === selectedTermSlug) {
            return {
              ...prevTerms,
              type: '',
            }
          }
          return {
            ...prevTerms,
            type: selectedTermSlug,
          }
        })
        setFilterInteraction(true)
      }
    }
  }

  return (
    <fieldset className={styles.filterGroup}>
      <legend className={styles.legend}>{`Filter by ${taxonomyName}`}</legend>
      <div className={styles.list}>
        {terms.map((term) => (
          <button
            className={cx(styles.filter, { [styles.filter__selected]: (taxonomyName === 'category' && selectedTerms.categories.includes(term.slug)) || (taxonomyName === 'type' && selectedTerms.type === term.slug) })}
            type='button'
            key={term.slug}
            data-slug={term.slug}
            onClick={updateSelectedTerms}
          >
            {term.name}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
