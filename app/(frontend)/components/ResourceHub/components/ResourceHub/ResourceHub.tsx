'use client'

import { useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import cx from 'classnames'
import { AllResources } from 'app/(frontend)/lib/sanity/fetch/fetchAllResourcesAndTerms'
import fetchFilteredResources from 'app/(frontend)/lib/sanity/fetch/fetchFilteredResources'
import useIsBelowBreakpoint from 'app/(frontend)/hooks/useIsBelowBreakpoint'
import FilterGroup, { TSelectedTerms } from '../FilterGroup/FilterGroup'
import ResourceTeaser from '../ResourceTeaser'
import SearchForm from '../SearchForm'
import CloseXIcon from '../../../svgs/CloseX'
import FilterIcon from '../../../svgs/Filter'
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
  const [showResultsBtnText, setShowResultsBtnText] = useState('Show All')
  const [selectedTerms, setSelectedTerms] = useState<TSelectedTerms>({ categories: [], type: '' })
  const [filterInteraction, setFilterInteraction] = useState(false)
  const [isBelowBreakpoint] = useIsBelowBreakpoint('768px')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (filterInteraction) {
      const fetchNewResources = async () => {
        const filteredResourcesData = await fetchFilteredResources(selectedTerms.categories, selectedTerms.type)
        const { resources: filteredResources, count } = filteredResourcesData
        let resultsButtonText = 'Show All'
        if (selectedTerms.categories.length > 0 || selectedTerms.type) {
          resultsButtonText = `Show ${count} Result${count === 1 ? '' : 's'}`
        }
        setSelectedResources(filteredResources)
        setShowResultsBtnText(resultsButtonText)
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
            <button className={styles.filterButton} onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} type='button' aria-label='Toggle filters menu'>
              <FilterIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.postsWrap}>
        <div className={styles.postContainer}>
          <RemoveScroll forwardProps enabled={mobileFiltersOpen && isBelowBreakpoint}>
            <div className={cx(styles.filtersWrap, { [styles.filtersWrap__mobileOpen]: mobileFiltersOpen })}>
              <div className={styles.filtersWrap_Header}>
                <h3 className={styles.filtersWrap_Title}>Filters</h3>
                <button className={styles.filterButton} onClick={() => setMobileFiltersOpen(false)} type='button' aria-label='Close filters menu'>
                  <CloseXIcon />
                </button>
              </div>
              <div className={styles.filtersInner}>
                {categories.length > 0 && <FilterGroup terms={categories} taxonomyName='category' selectedTerms={selectedTerms} setSelectedTerms={setSelectedTerms} setFilterInteraction={setFilterInteraction} />}
                {types.length > 0 && <FilterGroup terms={types} taxonomyName='type' selectedTerms={selectedTerms} setSelectedTerms={setSelectedTerms} setFilterInteraction={setFilterInteraction} />}
              </div>
              <div className={styles.filterShowResults}>
                <button className={styles.filterShowResults_Button} onClick={() => setMobileFiltersOpen(false)} type='button'>
                  {showResultsBtnText}
                </button>
              </div>
            </div>
          </RemoveScroll>
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
