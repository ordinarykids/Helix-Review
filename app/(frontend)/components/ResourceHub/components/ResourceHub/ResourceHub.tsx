'use client'

import { useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import ReactPaginate from 'react-paginate'
import cx from 'classnames'
import { AllResources } from 'app/(frontend)/lib/sanity/fetch/fetchAllResourcesAndTerms'
import useIsBelowBreakpoint from 'app/(frontend)/hooks/useIsBelowBreakpoint'
import FilterGroup, { TSelectedTerms } from '../FilterGroup/FilterGroup'
import ResourceTeaser from '../ResourceTeaser'
import SearchForm from '../SearchForm'
import CaretRight from '../../../svgs/CaretRight'
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
  const {
    resources,
    categories,
    types,
  } = resourcesData
  const [selectedResources, setSelectedResources] = useState(resources)
  const [resourcesCount, setResourcesCount] = useState(resources.length)
  const [showResultsBtnText, setShowResultsBtnText] = useState('Show All')
  const [selectedTerms, setSelectedTerms] = useState<TSelectedTerms>({ categories: [], type: '' })
  const [filterInteraction, setFilterInteraction] = useState(false)
  const [isBelowBreakpoint] = useIsBelowBreakpoint('768px')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Pagination
  const [reactPaginateKey, setReactPaginateKey] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const visibleResources = selectedResources.slice(itemOffset, endOffset)
  const anchorId = 'paginationTopAnchor'
  const pageCount = Math.ceil(resourcesCount / itemsPerPage)
  // Invoked when user clicks to request another page
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % selectedResources.length
    setItemOffset(newOffset)
    document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (filterInteraction) {
      const filteredResources = resources.filter((resource) => {
        let hasCategories = true
        let isType = true
        if (selectedTerms.categories.length > 0) {
          hasCategories = selectedTerms.categories.every(
            (selectedCategory) => resource.categories?.includes(selectedCategory),
          )
        }
        if (selectedTerms.type) {
          isType = selectedTerms.type === resource.type?.slug
        }
        return hasCategories && isType
      })
      const filteredCount = filteredResources.length
      let resultsButtonText = 'Show All'
      if (selectedTerms.categories.length > 0 || selectedTerms.type) {
        resultsButtonText = `Show ${filteredCount} Result${filteredCount === 1 ? '' : 's'}`
      }
      setSelectedResources(filteredResources)
      setResourcesCount(filteredCount)
      setShowResultsBtnText(resultsButtonText)
      setItemOffset(0)
      // Update ReactPaginate key when resources list is filtered to unmount and remount the ReactPaginate component
      // to fix a bug where it doesn't make first page active
      setReactPaginateKey((prevKey) => prevKey + 1)
    }
  }, [selectedTerms, filterInteraction, resources])

  return (
    <section id={anchorId} className={styles.wrap}>
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
            {visibleResources.length > 0 ? (
              <>
                <ul className={styles.postList}>
                  {visibleResources.map((resource) => <ResourceTeaser key={resource._id} {...resource} />)}
                </ul>
                <ReactPaginate
                  key={reactPaginateKey}
                  containerClassName={styles.pagination}
                  pageLinkClassName={styles.pagination_Link}
                  activeLinkClassName={styles.pagination_Link__active}
                  previousLinkClassName={styles.pagination_NavLink}
                  nextLinkClassName={styles.pagination_NavLink}
                  breakLinkClassName={styles.pagination_Link}
                  disabledLinkClassName={styles.pagination_NavLink__disabled}
                  breakLabel='...'
                  nextLabel={(
                    <span className={cx(styles.pagination_NavSpan, styles.pagination_NextSpan)}>
                      <CaretRight />
                    </span>
                  )}
                  onPageChange={handlePageClick}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel={(
                    <span className={cx(styles.pagination_NavSpan, styles.pagination_PrevSpan)}>
                      <CaretRight />
                    </span>
                  )}
                  renderOnZeroPageCount={null}
                />
              </>
            ) : (
              <h3>No resources found</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
