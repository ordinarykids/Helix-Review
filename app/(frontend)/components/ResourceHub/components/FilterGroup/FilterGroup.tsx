import styles from './FilterGroup.module.scss'

export type TResourceFilter = {
  name: string
  slug: string
}

interface IResourceFilterGroup {
  termName: string
  terms: TResourceFilter[]
}

export default function FilterGroup({ termName, terms }: IResourceFilterGroup) {
  return (
    <fieldset className={styles.filterGroup}>
      <legend className={styles.legend}>{`Filter by ${termName}`}</legend>
      <div className={styles.list}>
        {terms.map((term) => (
          <button className={styles.filter} type='button' key={term.slug}>
            {term.name}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
