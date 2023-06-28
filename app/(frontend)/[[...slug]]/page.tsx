import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityDataset } from '@/environment'
import Script from 'next/script'
import fetchPageByPath from '../lib/sanity/fetch/fetchPageByPath'
import HomePageHero from '../components/HomePageHero'
import HomeHeroThreeUp from '../components/HomeHeroThreeUp'
import GeometricCTAs from '../components/GeometricCTAs'
import PageHero from '../components/PageHero'
import PartnerLogoGrid from '../components/PartnerLogoGrid/PartnerLogoGrid'
import PageSection from '../components/PageSection'
import Quote from '../components/Quote'

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
): Promise<Metadata> {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    return {}
  }

  const { title } = pageData

  return {
    title,
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    notFound()
  }

  const {
    homePageHero,
    homeHeroThreeUp,
    pageHero,
    pageBuilder,
  } = pageData
  return (
    <>
      {sanityDataset === 'staging' && (
        <>
          <Script
            id='markerConfig'
            dangerouslySetInnerHTML={{
              __html: `window.markerConfig = {
              project: '649c5c080ef2001603f300e0', 
              source: 'snippet'
            }`,
            }}
          />
          <Script
            id='markerSnippet'
            dangerouslySetInnerHTML={{
            // eslint-disable-next-line
            __html: `!function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);`,
            }}
          />
        </>
      )}
      <main>
        {homePageHero && <HomePageHero {...homePageHero} />}
        {homeHeroThreeUp && <HomeHeroThreeUp {...homeHeroThreeUp} />}
        {pageHero && <PageHero {...pageHero} />}

        {pageBuilder && pageBuilder.length > 0 && pageBuilder.map((buildingBlock) => {
          switch (buildingBlock?._type) {
            case 'pageSection':
              return <PageSection key={buildingBlock._key} {...buildingBlock} />

            case 'geometricCTAs':
              return <GeometricCTAs key={buildingBlock._key} {...buildingBlock} />

            case 'partnerLogoGrid':
              return <PartnerLogoGrid key={buildingBlock._key} {...buildingBlock} />

            case 'quote':
              return <Quote key={buildingBlock._key} {...buildingBlock} />

            default:
              return null
          }
        })}
      </main>
    </>
  )
}
