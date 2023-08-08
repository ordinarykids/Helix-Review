'use client'

import { useEffect, useState } from 'react'
import cx from 'classnames'
import { AllResources } from 'app/(frontend)/lib/sanity/fetch/fetchAllResourcesAndTerms'
import fetchFilteredResources from 'app/(frontend)/lib/sanity/fetch/fetchFilteredResources'
import FilterGroup, { TSelectedTerms } from '../FilterGroup/FilterGroup'
import ResourceTeaser from '../ResourceTeaser'
import SearchForm from '../SearchForm'
import styles from './ResourceHub.module.scss'

export interface ResourceHubLayoutProps {
  header?: string
}

interface ResourceHubProps extends ResourceHubLayoutProps {
  resourcesData: AllResources
}

export interface ResourceHubField extends ResourceHubProps {
  _key: string
  _type: 'resourceHub'
}

export default function ResourceHub({ header, resourcesData }: ResourceHubProps) {
  const { resources, categories, types } = resourcesData
  const [selectedResources, setSelectedResources] = useState(resources)
  const [selectedTerms, setSelectedTerms] = useState<TSelectedTerms>({ categories: [], type: '' })
  const [filterInteraction, setFilterInteraction] = useState(false)

  useEffect(() => {
    if (filterInteraction) {
      const fetchNewResources = async () => {
        const filteredResourcesData = await fetchFilteredResources(selectedTerms.categories, selectedTerms.type)
        setSelectedResources(filteredResourcesData)
      }
      fetchNewResources()
    }
  }, [selectedTerms, filterInteraction])

  return (
    <section className={styles.wrap}>
      <div className={styles.stickySearch}>
        <div className={cx(styles.stickySearchContainer)}>
          {header && <h2 className={styles.header}>{header}</h2>}
          <div className={styles.searchWrap}>
            <SearchForm />
          </div>
        </div>
      </div>
      <div className={styles.postsWrap}>
        <div className={styles.postContainer}>
          <div className={styles.filtersWrap}>
            {categories.length > 0 && <FilterGroup terms={categories} taxonomyName='category' selectedTerms={selectedTerms} setSelectedTerms={setSelectedTerms} setFilterInteraction={setFilterInteraction} />}
            {types.length > 0 && <FilterGroup terms={types} taxonomyName='type' selectedTerms={selectedTerms} setSelectedTerms={setSelectedTerms} setFilterInteraction={setFilterInteraction} />}
          </div>
          <div className={styles.posts}>
            {selectedResources.length > 0 ? (
              <ul className={styles.postList}>
                {selectedResources.map((resource) => <ResourceTeaser key={resource._id} {...resource} />)}
              </ul>
            ) : (
              <h3>No resources found</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
