import { getAllPosts } from 'lib/api'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { log } from 'console'

export default async function Home() {
  const posts = await getAllPosts(4)

  for(const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  return (
    <Container>
      <Hero 
        title='CUBE'
        subtitle='アウトプットしていくサイト'
        imageOn
      />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText='More Posts' />
      <img src='/react/next-blog-ssg/next.svg' alt="" />
    </Container>
  )
}