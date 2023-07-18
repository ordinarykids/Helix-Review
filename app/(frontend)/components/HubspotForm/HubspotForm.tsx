'use client'

import dynamic from 'next/dynamic'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import styles from './HubspotForm.module.scss'

// Load client-side only to avoid Warning: Prop `id` did not match. on client vs server
const ReactHubspotForm = dynamic(() => import('react-hubspot-form'), {
  ssr: false,
})

interface HubspotFormProps {
  header?: string | null
  text?: PortableTextBlock[]
  hubspotFormId: string
}

export interface HubspotFormField extends HubspotFormProps {
  _key: string
  _type: 'hubspotForm'
}

const HubspotForm = ({ header, text, hubspotFormId }: HubspotFormProps): JSX.Element => (
  <section className={styles.wrap}>
    <div className={styles.container}>
      {(header || text) && (
        <div className={styles.intro}>
          {header && (
            <h2 className={styles.title}>
              {header}
            </h2>
          )}
          {text && (
            <div className={styles.textWrap}>
              <PortableText value={text} />
            </div>
          )}
        </div>
      )}
      <div className={styles.hsFormWrap}>
        <ReactHubspotForm
          // eslint-disable-next-line
          // @ts-ignore
          portalId='21375987'
          formId={hubspotFormId}
        />
      </div>
    </div>
  </section>
)

export default HubspotForm
