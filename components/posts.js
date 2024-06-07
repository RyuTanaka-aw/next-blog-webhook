import styles from 'styles/posts.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch}) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                width={eyecatch.width}
                height={eyecatch.height}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}

    </div>
  )
}