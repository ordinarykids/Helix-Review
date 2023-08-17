import Link from 'next/link'
import cx from 'classnames'
import styles from './ResourceTeaser.module.scss'

export interface IResourceTeaser {
  _createdAt: string;
  externalUrl: string | null;
  publication: string | null;
  publicationSource: string | null;
  slug: string
  title: string | null;
  type: {
    name: string;
    slug: string;
    color: string;
  } | null;
}

export default function ResourceTeaser({
  _createdAt,
  slug,
  title,
  publication,
  publicationSource,
  externalUrl,
  type,
}: IResourceTeaser) {
  return (
    <li className={styles.post}>
      <article className={styles.post_Inner}>
        <div className={styles.post_Meta}>
          {type && (
            <div className={styles.post_Type} style={{ color: type.color, borderColor: type.color }}>
              {type.name}
            </div>
          )}
          <time dateTime={_createdAt} className={styles.post_Date}>
            {new Date(_createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
          </time>
        </div>
        <h3 className={styles.post_Title}>
          {externalUrl ? (
            <a href={externalUrl}>
              {title}
            </a>
          ) : (
            <Link href={`/resources/${slug}`}>
              {title}
            </Link>
          )}
        </h3>
        {publication && (
          publicationSource ? (
            <a
              href={publicationSource}
              className={cx(styles.post_Publication, styles.post_Publication__link)}
            >
              {publication}
            </a>
          ) : (
            <div className={styles.post_Publication}>
              {publication}
            </div>
          )
        )}
      </article>
    </li>
  )
}
