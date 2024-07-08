import Container from '/components/container'
import Hero from '/components/hero'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

const eyecatch = eyecatchLocal

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteUrl } = siteMeta

// ベースのメタデータ
import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'

const NotFound = () => {
  return (
    <Container>
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  )
}

export default NotFound

// メタデータ
const pageTitle = '404 Not Found'
const pageDesc = '404 Not Found'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/404', siteUrl).toString()

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
    images: [
      {
        url: eyecatch.src,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    ],
  },
  twitter: {
    ...twitterMetadata,
    description: pageDesc,
    images: [eyecatch.src],
  }
}