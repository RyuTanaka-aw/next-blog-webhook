import Container from '/components/container'
import Hero from 'components/hero'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteUrl } = siteMeta

// ベースのメタデータ
import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'

export default function Blog() {
  return (
    <Container>
      <Hero 
        title='Blog'
        subtitle='Recent Posts'
      />
    </Container>
  )
}

// メタデータ
const pageTitle = 'ブログ'
const pageDesc = 'ブログ記事一覧'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/blog', siteUrl).toString()

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  }
}