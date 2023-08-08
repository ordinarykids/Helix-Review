import cx from 'classnames'
import fetchAllResourcesAndTerms from 'app/(frontend)/lib/sanity/fetch/fetchAllResourcesAndTerms'
import FilterGroup from './components/FilterGroup'
import ResourceTeaser from './components/ResourceTeaser'
import styles from './ResourceHub.module.scss'

interface ResourceHubProps {
  header?: string,
}

export interface ResourceHubField extends ResourceHubProps {
  _key: string
  _type: 'resourceHub'
}

export default async function ResourceHub({ header }: ResourceHubProps) {
  const resourcesData = await fetchAllResourcesAndTerms()
  const { resources, categories, types } = resourcesData

  return (
    <section className={styles.wrap}>
      <div className={styles.stickySearch}>
        <div className={cx(styles.stickySearchContainer)}>
          {header && <h2 className={styles.header}>{header}</h2>}
          <div className={styles.searchWrap}>
            Search
          </div>
        </div>
      </div>
      <div className={styles.postsWrap}>
        <div className={styles.postContainer}>
          <div className={styles.filtersWrap}>
            {categories.length > 0 && <FilterGroup terms={categories} termName='category' />}
            {types.length > 0 && <FilterGroup terms={categories} termName='type' />}
          </div>
          <div className={styles.posts}>
            {resources.length > 0 ? (
              <ul className={styles.postList}>
                {resources.map((resource) => <ResourceTeaser key={resource._id} {...resource} />)}
              </ul>
            ) : (
              <h2>No resources found</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
