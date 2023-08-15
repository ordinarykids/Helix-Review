import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import fetchLatestContent from 'app/(frontend)/lib/sanity/fetch/fetchLatestContent'
import StyledLink from 'app/(frontend)/components/StyledLink'
import styles from './LatestContentSection.module.scss'

export interface ILatestContentSection {
  _key: string
  term: {
    _type: string
    name: string
    descriptiveName?: string
    slug: string
    color?: string
  }
  layout: 'threeUp' | 'fourUp' | 'wideCards'
  showImage: boolean
  showDate: boolean
  showAuthor: boolean
  showSubtitle: boolean
  bgColor: 'white' | 'blue'
}

export default async function LatestContentSection({
  term,
  layout,
  showImage,
  showDate,
  showAuthor,
  showSubtitle,
  bgColor,
}: ILatestContentSection) {
  const {
    _type,
    name,
    descriptiveName,
    slug,
    color,
  } = term

  let count
  switch (layout) {
    case 'fourUp':
      count = 4
      break
    case 'wideCards':
      count = 5
      break
    default:
      count = 3
  }

  const taxonomyRouteSlug = _type === 'resourceType' ? 'type' : _type

  const latestResources = await fetchLatestContent(_type, slug, count)

  if (latestResources?.length === 0) {
    return null
  }

  return (
    <div className={styles.section}>
      <div className={styles.headerWrap}>
        <h3 className={styles.sectionTitle}>
          {`Recent ${descriptiveName || name}`}
        </h3>
        <StyledLink
          text={`View All ${descriptiveName || name}`}
          link={`resources/${taxonomyRouteSlug}/${slug}`}
          className={styles.sectionLink}
        />
      </div>
      <div className={styles.cards}>
        {latestResources.map((resource, index) => {
          const {
            author,
            _createdAt,
            externalUrl,
            featuredImage,
            gridThumbnail,
            _id,
            slug: articleSlug,
            subtitle,
            title,
          } = resource
          const teaserImage = gridThumbnail ?? featuredImage
          const termPillColor = bgColor === 'blue' ? 'white' : color
          return (
            <Link
              key={_id}
              href={externalUrl || `/resources/${articleSlug}`}
              className={cx(styles.card, styles[`card__${layout}`], styles[`card__${bgColor}`])}
            >
              <article className={styles.cardInner}>
                {showImage && layout !== 'wideCards' && teaserImage && (
                  <div className={styles.cardImageWrap}>
                    {teaserImage && (
                      <Image
                        className={styles.cardImage}
                        src={teaserImage.url}
                        width={teaserImage.width}
                        height={teaserImage.height}
                        alt={teaserImage.altText ?? ''}
                        title={teaserImage.title ?? undefined}
                      />
                    )}
                  </div>
                )}
                <div
                  className={cx(
                    styles.cardText,
                    {
                      [styles.cardText__vertical]: layout !== 'wideCards',
                      [styles.cardText__horizontal]: layout === 'wideCards',
                    },
                  )}
                >
                  {layout === 'wideCards' && (
                    <p className={styles.cardNumber}>
                      {index + 1}
                    </p>
                  )}
                  <div className={styles.cardTextInner}>
                    <div className={styles.cardTerm} style={{ color: termPillColor, borderColor: termPillColor }}>
                      {name}
                    </div>
                    <div className={styles.cardTitleWrap}>
                      {title && (
                        <h4 className={styles.cardTitle}>
                          {resource.title}
                        </h4>
                      )}
                      {showSubtitle && subtitle && (
                        <div className={styles.cardSubtitle}><PortableText value={subtitle} /></div>
                      )}
                    </div>
                    {((showAuthor && author) || showDate) && (
                      <div className={styles.cardMeta}>
                        {showAuthor && author && (
                          <p className={styles.cardAuthor}>
                            {`By ${author.designation ?? ''} ${author.firstName ?? ''}${author.lastName ? ` ${author.lastName}` : ''}${author.title ? `, ${author.title}` : ''}`}
                          </p>
                        )}
                        {showDate && (
                          <time dateTime={_createdAt} className={styles.cardDate}>
                            {new Date(_createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
